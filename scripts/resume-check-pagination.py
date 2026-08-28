"""Report the page each EXPERIENCE entry's parts land on.

An entry is intact when its heading, every bullet and its keyword line share a
page. Run it on a built resume to confirm no role was split across pages:

    python3 scripts/resume-check-pagination.py public/resume_brenopolanski.pdf \
        resume/resume.tex
"""

import re
import sys
from pathlib import Path

from pypdf import PdfReader

ENTRY = re.compile(
    r"\\resumeSubheading\n"
    r"\{(?P<position>[^\n]*)\}\{(?P<dates>[^\n]*)\}\n"
    r"\{(?P<company>[^}]*)\}\{[^\n]*\}\n"
    r"\\begin\{adjustwidth\}.*?\n(?P<body>.*?)\\end\{adjustwidth\}",
    re.DOTALL,
)
LINE = re.compile(r"\\(?:item|textbf\{[^}]+\}:)\s*(?P<text>.+)")


def flatten(text):
    text = re.sub(r"\\href\{[^}]*\}\{([^}]*)\}", r"\1", text)
    text = re.sub(r"\\[a-zA-Z]+|[{}]", "", text)
    return re.sub(r"\s+", " ", text).replace("\\&", "&").strip()


def main():
    pdf, tex = Path(sys.argv[1]), Path(sys.argv[2])
    pages = [re.sub(r"\s+", " ", p.extract_text()) for p in PdfReader(pdf).pages]

    def page_of(needle):
        # Hyphenation splits words across lines, so match on a short run, and
        # drop the word the cut landed in rather than half of it.
        probe = needle if len(needle) <= 40 else needle[:40].rsplit(" ", 1)[0]
        return next((i + 1 for i, p in enumerate(pages) if probe in p), None)

    intact = True
    for entry in ENTRY.finditer(tex.read_text()):
        role = f"{entry['position']} - {entry['company']}"
        # A job title alone repeats across roles, so pin it to its own dates.
        heading = flatten(f"{entry['position']} {entry['dates']}")
        parts = {"heading": page_of(heading)}
        for index, line in enumerate(LINE.finditer(entry["body"])):
            parts[f"line {index + 1}"] = page_of(flatten(line["text"]))

        found = sorted({p for p in parts.values() if p})
        ok = len(found) == 1
        intact &= ok
        where = f"page {found[0]}" if ok else f"SPLIT across pages {found}"
        print(f"{flatten(role)[:44]:<46} {len(parts):>2} parts  {where}")

    print("\nEvery entry is intact" if intact else "\nAn entry is split")
    return 0 if intact else 1


if __name__ == "__main__":
    sys.exit(main())
