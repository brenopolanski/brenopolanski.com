#!/bin/bash

# Build resume.yml to public/resume_brenopolanski.pdf.
# yamlresume requires skill `level` for schema validation and always prints it.
# This script keeps those fields in YAML, then removes the labels from TeX
# before compiling the PDF.

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
path.write_text(updated)
PY

docker run --rm \
  -v "$resume_dir:/home/yamlresume" \
  --workdir /home/yamlresume \
  --entrypoint xelatex \
  yamlresume/yamlresume \
  -halt-on-error resume.tex

cp "$resume_dir/resume.pdf" "$root/public/resume_brenopolanski.pdf"
