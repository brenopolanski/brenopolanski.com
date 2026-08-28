"""Patch the TeX that yamlresume generates, before XeLaTeX compiles it.

Applies to every language build:

* hide the skill proficiency labels the schema requires but the layout should
  not print,
* use conventional section headings instead of small caps,
* keep a whole role on one page, breaking the page between roles instead,
* separate one job's keywords from the next role,
* underline the links the template leaves bare, so every link matches,
* render header icons from a font that has a ToUnicode map, and replace the
  math-mode separator that renders through an unmapped Type 3 font.

Locale-sensitive wording is matched by shape rather than by word, so the same
patches work for the English and Brazilian Portuguese builds. The one exception
is the per-locale keyword label, which is renamed by --locale.
"""

import argparse
import re
from pathlib import Path

# "Name: <level> \hfill Keywords: ..." where both labels are localised.
SKILL_LEVEL = re.compile(r"(\\textbf\{[^}]+\}): [^\\]*\\hfill \\textbf\{[^}]+\}: ")

# yamlresume labels each job's keyword list from its own locale. Brazilian
# resumes conventionally head that list "Tecnologias" rather than the literal
# "Palavras-chave", so the pt-BR build renames it. English keeps "Keywords".
KEYWORDS_LABEL = {"pt-br": ("Palavras-chave", "Tecnologias")}

# The template underlines \href but leaves \url bare, which is why the header
# website and the company links in EXPERIENCE were the only links without an
# underline. Routing them through \href picks it up. \urlstyle does not match.
BARE_URL = re.compile(r"\\url\{([^{}]+)\}")

# Where one job's block ends and the next one's heading begins.
OLD_JOB_BOUNDARY = "\\end{adjustwidth}\n\n\\resumeSubheading"
NEW_JOB_BOUNDARY = (
    "\\resumeEntryBreak\n"
    "\\end{adjustwidth}\n\n"
    "\\vspace{6pt}\n"
    "\\resumeSubheading"
)

SUBHEADING_ANCHOR = """\\newcommand{\\resumeSubheading}[4]{
  \\begin{tabular*}{\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
    \\textbf{#1} & #2 \\\\
    \\textit{#3} & \\textit{#4} \\\\
  \\end{tabular*}
}"""
PAGEBREAK_PATCH = (
    SUBHEADING_ANCHOR
    + """

% A page may break between two roles, never inside one. LaTeX rates the places
% inside a role cheaply: -51 before a list, between its items and after it, and
% 0 between the lines of a wrapped bullet, which is how a heading ends up alone
% at the foot of a page with its bullets overleaf. Raising them to 9999 leaves
% the page builder no affordable break inside a role, so it falls back to the
% last role boundary that fits and carries the whole role forward. 9999 rather
% than \\@M keeps the breaks legal, so a role taller than a full page can still
% split as a last resort.
%
% \\resumeEntryBreak then reopens the boundary at the end of each role, since
% closing the role now carries a 9999 of its own and the gap that follows it is
% glue behind a penalty, which TeX will not break at either. It is worth the
% same -\\@lowpenalty LaTeX gives the end of a list, so a page still fills to
% the last role that fits rather than breaking at the first boundary it saw.
\\makeatletter
\\interlinepenalty=9999
\\@beginparpenalty=9999
\\@endparpenalty=9999
\\@itempenalty=9999
\\newcommand{\\resumeEntryBreak}{\\par\\penalty-\\@lowpenalty\\relax}
\\makeatother"""
)

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
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("tex", type=Path)
    parser.add_argument("--locale", default="en")
    args = parser.parse_args()

    path = args.tex
    text = path.read_text()

    updated = SKILL_LEVEL.sub(r"\1: ", text)
    if updated == text:
        raise SystemExit(f"{path.name}: found no skill proficiency labels to hide")

    if SUBHEADING_ANCHOR not in updated:
        raise SystemExit(f"{path.name}: found no resumeSubheading command to patch")
    updated = updated.replace(SUBHEADING_ANCHOR, PAGEBREAK_PATCH, 1)

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

    # Every gap between two roles lands after \resumeEntryBreak, so a page that
    # breaks there ends on the role's last line and opens on the next heading.
    if OLD_JOB_BOUNDARY not in updated:
        raise SystemExit(f"{path.name}: found no job boundary to space out")
    spaced = updated.replace(OLD_JOB_BOUNDARY, NEW_JOB_BOUNDARY)

    linked, count = BARE_URL.subn(r"\\href{\1}{\1}", spaced)
    if count == 0:
        raise SystemExit(f"{path.name}: found no bare links to underline")

    # Runs after SKILL_LEVEL, which has already dropped the copy of this label
    # that sits in the Skills section, so only the job keyword lines are left.
    rename = KEYWORDS_LABEL.get(args.locale)
    if rename is not None:
        source, target = rename
        old = f"\\textbf{{{source}}}: "
        if old not in linked:
            raise SystemExit(f"{path.name}: found no {source!r} label to rename")
        linked = linked.replace(old, f"\\textbf{{{target}}}: ")

    path.write_text(linked)


if __name__ == "__main__":
    main()
