"""Patch the TeX that yamlresume generates, before XeLaTeX compiles it.

Applies to every language build:

* hide the skill proficiency labels the schema requires but the layout should
  not print,
* use conventional section headings instead of small caps,
* keep a role heading with its own bullets,
* separate one job's keywords from the next role,
* underline the links the template leaves bare, so every link matches,
* render header icons from a font that has a ToUnicode map, and replace the
  math-mode separator that renders through an unmapped Type 3 font.

Locale-sensitive wording is matched by shape rather than by word, so the same
patches work for the English and Brazilian Portuguese builds.
"""

import re
import sys
from pathlib import Path

# "Name: <level> \hfill Keywords: ..." where both labels are localised.
SKILL_LEVEL = re.compile(r"(\\textbf\{[^}]+\}): [^\\]*\\hfill \\textbf\{[^}]+\}: ")

# The template underlines \href but leaves \url bare, which is why the header
# website and the company links in EXPERIENCE were the only links without an
# underline. Routing them through \href picks it up. \urlstyle does not match.
BARE_URL = re.compile(r"\\url\{([^{}]+)\}")

OLD_SUBHEADING = """\\newcommand{\\resumeSubheading}[4]{
  \\begin{tabular*}{\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
    \\textbf{#1} & #2 \\\\
    \\textit{#3} & \\textit{#4} \\\\
  \\end{tabular*}
}"""
NEW_SUBHEADING = """\\newcommand{\\resumeSubheading}[4]{
  \\begin{tabular*}{\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
    \\textbf{#1} & #2 \\\\
    \\textit{#3} & \\textit{#4} \\\\
  \\end{tabular*}%
  \\nopagebreak
}"""

OLD_HEADING = """\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]"""
NEW_HEADING = """\\titleformat{\\section}{
  \\vspace{-4pt}\\raggedright\\large\\bfseries
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]"""

FONTSPEC_ANCHOR = """%% fontspec
\\usepackage{fontspec}"""
# The icon is followed by the icon font's own space rather than the template's,
# so the post-build pass can label the icon and the space separately. MuPDF caps
# a ToUnicode mapping at 8 characters, which "LinkedIn: " would exceed.
FONTSPEC_PATCH = FONTSPEC_ANCHOR + """
\\IfFontExistsTF{FontAwesome}{%
  \\newfontfamily\\faunicodefont{FontAwesome}%
  \\newcommand{\\faicon}[2]{{\\faunicodefont\\symbol{"#1}\\symbol{"20}}}%
}{%
  \\newcommand{\\faicon}[2]{#2\\ }%
}"""

# fontawesome5/7 embed subset fonts with no ToUnicode CMap at all, so text
# extraction invents characters for the icons. The v4 font maps every glyph to a
# codepoint, which the post-build pass then rewrites into a written label.
ICONS = [
    (r"{\small \faPhoneVolume}~", "F2A0", r"\faPhoneVolume"),
    (r"{\small \faEnvelope[regular]}~", "F003", r"\faEnvelope[regular]"),
    (r"{\small \faGlobe}~", "F0AC", r"\faGlobe"),
    (r"{\small \faLinkedin}\ ", "F08C", r"\faLinkedin"),
    (r"{\small \faGithub}\ ", "F09B", r"\faGithub"),
]


def main():
    path = Path(sys.argv[1])
    text = path.read_text()

    updated = SKILL_LEVEL.sub(r"\1: ", text)
    if updated == text:
        raise SystemExit(f"{path.name}: found no skill proficiency labels to hide")

    if OLD_SUBHEADING not in updated:
        raise SystemExit(f"{path.name}: found no resumeSubheading command to patch")
    updated = updated.replace(OLD_SUBHEADING, NEW_SUBHEADING, 1)

    if OLD_HEADING not in updated:
        raise SystemExit(f"{path.name}: found no section heading format to patch")
    updated = updated.replace(OLD_HEADING, NEW_HEADING, 1)

    if FONTSPEC_ANCHOR not in updated:
        raise SystemExit(f"{path.name}: found no fontspec block for the icon font")
    updated = updated.replace(FONTSPEC_ANCHOR, FONTSPEC_PATCH, 1)

    for snippet, codepoint, fallback in ICONS:
        if snippet not in updated:
            raise SystemExit(f"{path.name}: found no header icon {fallback}")
        updated = updated.replace(snippet, f"{{\\small \\faicon{{{codepoint}}}{{{fallback}}}}}")

    if " $|$ " not in updated:
        raise SystemExit(f"{path.name}: found no header separator to replace")
    updated = updated.replace(" $|$ ", " | ")

    spaced = re.sub(
        r"(\\end\{adjustwidth\}\n\n)\\resumeSubheading",
        r"\1\\vspace{6pt}\n\\resumeSubheading",
        updated,
    )
    if spaced == updated:
        raise SystemExit(f"{path.name}: found no job boundary to space out")

    linked, count = BARE_URL.subn(r"\\href{\1}{\1}", spaced)
    if count == 0:
        raise SystemExit(f"{path.name}: found no bare links to underline")

    path.write_text(linked)


if __name__ == "__main__":
    main()
