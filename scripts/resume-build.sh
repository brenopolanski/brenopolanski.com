#!/bin/bash

# Build resume.yml to public/resume_brenopolanski.pdf.
# yamlresume requires skill `level` for schema validation and always prints it.
# This script keeps those fields in YAML, then patches the TeX before compile:
# hide skill levels, use conventional section headings, keep role headings
# with their bullets, and add space between a job's keywords and the next role.

set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
resume_dir="$root/resume"
tex_file="$resume_dir/resume.tex"

docker run --rm -v "$resume_dir:/home/yamlresume" yamlresume/yamlresume build --no-pdf resume.yml

python3 - "$tex_file" <<'PY'
from pathlib import Path
import re
import sys

path = Path(sys.argv[1])
text = path.read_text()

updated = re.sub(
    r"(\\textbf\{[^}]+\}): (?:Novice|Beginner|Intermediate|Advanced|Expert|Master) \\hfill \\textbf\{Keywords\}: ",
    r"\1: ",
    text,
)
if updated == text:
    raise SystemExit("Did not find skill proficiency labels to hide in resume.tex")

old_command = """\\newcommand{\\resumeSubheading}[4]{
  \\begin{tabular*}{\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
    \\textbf{#1} & #2 \\\\
    \\textit{#3} & \\textit{#4} \\\\
  \\end{tabular*}
}"""
new_command = """\\newcommand{\\resumeSubheading}[4]{
  \\begin{tabular*}{\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
    \\textbf{#1} & #2 \\\\
    \\textit{#3} & \\textit{#4} \\\\
  \\end{tabular*}%
  \\nopagebreak
}"""
if old_command not in updated:
    raise SystemExit("Did not find resumeSubheading command to patch")
updated = updated.replace(old_command, new_command, 1)

old_heading = """\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]"""
new_heading = """\\titleformat{\\section}{
  \\vspace{-4pt}\\raggedright\\large\\bfseries
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]"""
if old_heading not in updated:
    raise SystemExit("Did not find section heading format to patch")
updated = updated.replace(old_heading, new_heading, 1)

spaced = re.sub(
    r"(\\end\{adjustwidth\}\n\n)\\resumeSubheading",
    r"\1\\vspace{6pt}\n\\resumeSubheading",
    updated,
)
if spaced == updated:
    raise SystemExit("Did not find job boundaries to add space before the next role")
updated = spaced

path.write_text(updated)
PY

docker run --rm \
  -v "$resume_dir:/home/yamlresume" \
  --workdir /home/yamlresume \
  --entrypoint xelatex \
  yamlresume/yamlresume \
  -halt-on-error resume.tex

cp "$resume_dir/resume.pdf" "$root/public/resume_brenopolanski.pdf"
