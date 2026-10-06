#!/usr/bin/env bun
//
// Generates the Brazilian Portuguese resumes from the English sources.
//
//   resume.yml          + translations.pt-BR.yml -> resume_pt.generated.yml
//   resume_frontend.yml + translations.pt-BR.yml -> resume_frontend_pt.generated.yml
//
// The English files are never read for anything but their content, and the
// generated files are overwritten on every build. Any string without an entry
// in the translation memory aborts the build, which keeps the languages from
// drifting apart silently.

/// <reference types="bun" />

import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const resumeDir = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'resume')
const memoryPath = resolve(resumeDir, 'translations.pt-BR.yml')
const sources = [
  { source: 'resume.yml', target: 'resume_pt.generated.yml' },
  { source: 'resume_frontend.yml', target: 'resume_frontend_pt.generated.yml' },
]

const read = (path: string) => Bun.YAML.parse(readFileSync(path, 'utf8')) as any

const memory = read(memoryPath)
const phrases: Record<string, string> = memory.strings ?? {}
const used = new Set<string>()

function translate(text: unknown, missing: Set<string>): unknown {
  if (typeof text !== 'string') {
    return text
  }
  const translated = phrases[text]
  if (translated === undefined) {
    missing.add(text)
    return text
  }
  used.add(text)
  return translated
}

// Summaries are literal blocks of "- bullet" lines; each bullet is translated on
// its own so the bullet count stays identical between the two languages.
function translateBullets(block: unknown, missing: Set<string>): unknown {
  if (typeof block !== 'string') {
    return block
  }
  return block
    .split('\n')
    .map((line) => {
      const bullet = /^(\s*-\s+)(.+)$/.exec(line)
      return bullet ? bullet[1] + translate(bullet[2], missing) : line
    })
    .join('\n')
}

function translateResume(source: any, missing: Set<string>) {
  const output = structuredClone(source)
  const content = output.content ?? {}

  content.basics.headline = translate(content.basics.headline, missing)
  content.basics.summary = translateBullets(content.basics.summary, missing)

  for (const job of content.work ?? []) {
    job.position = translate(job.position, missing)
    job.summary = translateBullets(job.summary, missing)
  }
  // `degree` and skill `level` are schema enums that yamlresume renders in the
  // target locale on its own, so they stay in their English schema form here.
  for (const study of content.education ?? []) {
    study.area = translate(study.area, missing)
  }
  for (const award of content.awards ?? []) {
    award.title = translate(award.title, missing)
    award.awarder = translate(award.awarder, missing)
  }
  for (const skill of content.skills ?? []) {
    skill.name = translate(skill.name, missing)
  }

  output.locale = { language: memory.locale }
  for (const layout of output.layouts ?? []) {
    if (layout.sections?.aliases) {
      layout.sections.aliases = { ...memory.sections }
    }
  }

  return output
}

let failed = false
const outputs: { source: string; target: string; output: any }[] = []

for (const { source, target } of sources) {
  const missing = new Set<string>()
  const output = translateResume(read(resolve(resumeDir, source)), missing)
  if (missing.size > 0) {
    failed = true
    const list = [...missing].map((text) => `  - ${JSON.stringify(text)}`).join('\n')
    console.error(
      `Missing pt-BR translations for ${source} in ${memoryPath}:\n${list}\n\n` +
        'Add an entry for each string above, mapping it to itself if it should stay in English.',
    )
  }
  outputs.push({ source, target, output })
}

if (failed) {
  process.exit(1)
}

// An entry nobody looks up is usually a translation written for a field the
// generator does not touch, which otherwise fails silently: the wording sits in
// the memory while the PDF keeps the English string.
const unused = Object.keys(phrases).filter((text) => !used.has(text))
if (unused.length > 0) {
  const list = unused.map((text) => `  - ${JSON.stringify(text)}`).join('\n')
  console.warn(
    `Warning: unused pt-BR translations in ${memoryPath}:\n${list}\n\n` +
      'No field in the English resumes carries these strings, so they change nothing.',
  )
}

// Bun.YAML.stringify emits flow style on a single line. The generated file is
// worth reading when a translation looks wrong, so write block style instead.
function dump(value: unknown, indent = 0): string {
  const pad = '  '.repeat(indent)

  if (Array.isArray(value)) {
    return value
      .map((item) => {
        const rendered = dump(item, indent + 1)
        return typeof item === 'object' && item !== null
          ? `${pad}-\n${rendered}`
          : `${pad}- ${rendered.trimStart()}`
      })
      .join('\n')
  }

  if (value !== null && typeof value === 'object') {
    return Object.entries(value)
      .map(([key, nested]) => {
        if (nested !== null && typeof nested === 'object') {
          const rendered = dump(nested, indent + 1)
          return rendered === '' ? `${pad}${key}: {}` : `${pad}${key}:\n${rendered}`
        }
        return `${pad}${key}: ${scalar(nested, indent + 1)}`
      })
      .join('\n')
  }

  return `${pad}${scalar(value, indent)}`
}

function scalar(value: unknown, indent: number): string {
  if (typeof value === 'boolean' || typeof value === 'number') {
    return String(value)
  }
  const text = String(value)
  if (!text.includes('\n')) {
    return JSON.stringify(text)
  }

  // Literal block, so multi-line summaries stay as readable bullet lists.
  const pad = '  '.repeat(indent)
  const body = text
    .replace(/\n$/, '')
    .split('\n')
    .map((line) => (line === '' ? '' : pad + line))
    .join('\n')
  return `${text.endsWith('\n') ? '|' : '|-'}\n${body}`
}

for (const { source, target, output } of outputs) {
  const banner = [
    '# GENERATED FILE - DO NOT EDIT.',
    '#',
    `# Built by scripts/resume-translate.ts from ${source} (canonical content)`,
    '# and translations.pt-BR.yml (wording). Edit those two instead; every build',
    '# overwrites this file.',
    '',
  ].join('\n')
  const targetPath = resolve(resumeDir, target)

  writeFileSync(targetPath, `${banner}---\n${dump(output)}\n`)
  console.log(`Generated ${targetPath}`)
}
