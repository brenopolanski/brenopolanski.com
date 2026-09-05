#!/bin/bash

# Build both language versions of the resume into public/.
#
#   resume.yml                  -> public/resume_brenopolanski.pdf  (canonical)
#   resume_pt.generated.yml     -> public/cv_brenopolanski.pdf      (pt-BR)
#
# The Portuguese YAML is regenerated from resume.yml on every run, so resume.yml
# stays the only place resume content is edited.
#
# Each variant is compiled the same way: yamlresume emits TeX, that TeX is
# patched (skill levels hidden, headings, spacing, header icons), XeLaTeX
# compiles it, and a final pass labels the icon glyphs for text extraction.

set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
resume_dir="$root/resume"

run_in_image() {
  docker run --rm \
    -v "$resume_dir:/home/yamlresume" \
    -v "$root/scripts:/scripts:ro" \
    --workdir /home/yamlresume \
    "$@"
}

build_variant() {
  local source="$1" output="$2" locale="$3"
  local base="${source%.yml}"

  run_in_image yamlresume/yamlresume build --no-pdf "$source"

  python3 "$root/scripts/resume-patch-tex.py" "$resume_dir/$base.tex" --locale "$locale"

  run_in_image --entrypoint xelatex yamlresume/yamlresume -halt-on-error "$base.tex"

  run_in_image --entrypoint bash yamlresume/yamlresume -c "set -e
      mutool clean -d '$base.pdf' labelling.pdf
      python3 /scripts/resume-label-icon-glyphs.py labelling.pdf --locale '$locale'
      mutool clean -z labelling.pdf '$base.pdf'
      rm -f labelling.pdf"

  cp "$resume_dir/$base.pdf" "$root/public/$output"
  echo "Built public/$output"
}

bun "$root/scripts/resume-translate.ts"

build_variant resume.yml resume_brenopolanski.pdf en
build_variant resume_pt.generated.yml cv_brenopolanski.pdf pt-br
