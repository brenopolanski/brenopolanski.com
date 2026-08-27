#!/bin/bash

# Validate both language versions against the yamlresume schema.
# The Portuguese file is regenerated first so it always reflects resume.yml.

set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
resume_dir="$root/resume"

bun "$root/scripts/resume-translate.ts"

for source in resume.yml resume_pt.generated.yml; do
  echo "Validating $source"
  docker run --rm -v "$resume_dir:/home/yamlresume" yamlresume/yamlresume validate "$source"
done
