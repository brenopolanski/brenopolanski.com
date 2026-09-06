"""Give the header icons a readable meaning in the PDF text layer.

Font Awesome glyphs live in the Unicode private use area, so extracting the
PDF yields stray characters beside the contact details. A ToUnicode CMap may
map one glyph to a whole string, so each icon is remapped to the field name it
stands for. The icons still render; extraction now reads "Phone: +55 ...".

Expects a decompressed PDF (mutool clean -d) and rewrites it in place. The
labels are longer than the codepoints they replace, so stream lengths and the
xref offsets that follow the edit are both corrected to keep the file valid.
"""

import argparse
import re
from pathlib import Path

# MuPDF replaces any mapping longer than 8 characters with U+FFFD, so the
# colon rides on the space that follows each icon rather than on the label,
# and no label itself may be longer than that.
LOCALES = {
    "en": {
        "F2A0": "Phone",
        "F003": "E-mail",
        "F0AC": "Website",
        "F08C": "LinkedIn",
        "F09B": "GitHub",
        "0020": ": ",
    },
    "pt-br": {
        "F2A0": "Telefone",
        "F003": "E-mail",
        "F0AC": "Website",
        "F08C": "LinkedIn",
        "F09B": "GitHub",
        "0020": ": ",
    },
}
LOCALES["en-ai"] = LOCALES["en"]
LABEL_LIMIT = 8
ICON_FONT = b"FontAwesome"

STREAM_OBJECT = re.compile(
    rb"(\d+ 0 obj\s*<<\s*/Length )(\d+)(\s*>>\s*stream\r?\n)(.*?)(\r?\nendstream)",
    re.S,
)
BFCHAR = re.compile(rb"(<[0-9A-Fa-f]{4}>\s*)<([0-9A-Fa-f]{4})>")
SUBSECTION = re.compile(rb"\s*(\d+)\s+(\d+)\s*\r?\n")
STARTXREF = re.compile(rb"startxref\s*(\d+)\s*%%EOF")

ENTRY_WIDTH = 20


def repair_offsets(updated, original, shifts):
    """Move every xref offset that sits after an edit by the bytes it gained."""

    def shifted(offset):
        drift = 0
        for boundary, total in shifts:
            if offset >= boundary:
                drift = total
        return offset + drift

    pointer = STARTXREF.search(original)
    if pointer is None:
        raise SystemExit("Did not find startxref; cannot repair xref offsets")

    table = shifted(int(pointer.group(1)))
    body = bytearray(updated)
    if bytes(body[table : table + 4]) != b"xref":
        raise SystemExit("Shifted startxref does not point at an xref table")

    position = table + 4
    while True:
        subsection = SUBSECTION.match(body, position)
        if subsection is None:
            break
        position = subsection.end()
        for _ in range(int(subsection.group(2))):
            entry = bytes(body[position : position + ENTRY_WIDTH])
            if entry[17:18] == b"n":
                body[position : position + 10] = b"%010d" % shifted(int(entry[:10]))
            position += ENTRY_WIDTH

    tail = STARTXREF.search(body)
    if tail is None:
        raise SystemExit("Lost startxref while repairing xref offsets")
    body[tail.start(1) : tail.end(1)] = str(table).encode("ascii")
    return bytes(body)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("pdf", type=Path)
    parser.add_argument("--locale", choices=sorted(LOCALES), default="en")
    args = parser.parse_args()

    labels = LOCALES[args.locale]
    too_long = sorted(text for text in labels.values() if len(text) > LABEL_LIMIT)
    if too_long:
        raise SystemExit(
            f"Labels longer than {LABEL_LIMIT} characters extract as U+FFFD: "
            + ", ".join(too_long)
        )

    path = args.pdf
    data = path.read_bytes()
    relabelled = set()

    def rewrite_entry(entry):
        codepoint = entry.group(2).decode("ascii").upper()
        label = labels.get(codepoint)
        if label is None:
            return entry.group(0)
        relabelled.add(codepoint)
        target = label.encode("utf-16-be").hex().upper().encode("ascii")
        return entry.group(1) + b"<" + target + b">"

    updated = bytearray()
    cursor = 0
    shifts = []
    drift = 0

    for obj in STREAM_OBJECT.finditer(data):
        body = obj.group(4)
        if b"beginbfchar" not in body or ICON_FONT not in body:
            continue
        labelled = BFCHAR.sub(rewrite_entry, body)
        if labelled == body:
            continue
        length = str(len(labelled)).encode("ascii")
        replacement = obj.group(1) + length + obj.group(3) + labelled + obj.group(5)
        updated += data[cursor : obj.start()] + replacement
        cursor = obj.end()
        drift += len(replacement) - (obj.end() - obj.start())
        shifts.append((obj.end(), drift))

    updated += data[cursor:]

    missing = sorted(set(labels) - relabelled)
    if missing:
        raise SystemExit(f"Never found icon glyphs: {', '.join(missing)}")

    path.write_bytes(repair_offsets(bytes(updated), data, shifts))
    print(f"Labelled {len(relabelled)} header icons for text extraction")


if __name__ == "__main__":
    main()
