#!/usr/bin/env bun
//
// Generates the GitHub-facing portfolio README from the Fumadocs content.
//
//   content/portfolio/*.mdx -> portfolio/README.md
//                           -> portfolio/projects/<slug>/<image>
//
// The MDX files are the only place project copy is edited; this script renders
// them into the badge-and-table Markdown that GitHub can display, and mirrors
// the screenshots next to the README so its relative image paths resolve there.
//
// Project pages are plain Markdown bodies plus structured frontmatter, which is
// what keeps this rendering deterministic. Anything requiring JSX belongs on the
// website only.

/// <reference types="bun" />

import {
  cpSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { siteConfig } from '../src/config/site'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const contentDir = resolve(root, 'content', 'portfolio')
const publicImagesDir = resolve(root, 'public', 'images', 'portfolio')
const outputDir = resolve(root, 'portfolio')
const outputImagesDir = resolve(outputDir, 'projects')
const readmePath = resolve(outputDir, 'README.md')

const BADGE_BACKGROUND = '09090B'
const IMAGES_URL_PREFIX = '/images/portfolio/'

// shields.io logo slugs, keyed by the frontmatter value.
const STACK_LOGOS: Record<string, string> = {
  'Next.js': 'nextdotjs',
  'Node.js': 'nodedotjs',
  React: 'react',
  'Tailwind CSS': 'tailwindcss',
  'Tauri 2': 'tauri',
  TypeScript: 'typescript',
  Vite: 'vite',
  Vitest: 'vitest',
}

const LINK_LOGOS: Record<string, string> = {
  apple: 'apple',
  chrome: 'googlechrome',
  github: 'github',
  linkedin: 'linkedin',
  x: 'x',
}

interface ProjectImage {
  src: string
  alt: string
  layout?: 'hero' | 'grid'
}

interface ProjectLink {
  label: string
  href: string
  icon?: string
}

interface Frontmatter {
  title: string
  description?: string
  license?: string
  year?: number
  stack?: string[]
  links?: ProjectLink[]
  images?: ProjectImage[]
}

interface Page {
  slug: string
  data: Frontmatter
  body: string
}

const fail = (message: string): never => {
  console.error(`portfolio:readme — ${message}`)
  process.exit(1)
}

const parsePage = (slug: string, raw: string): Page => {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw)

  if (!match) {
    fail(`${slug}.mdx is missing frontmatter`)
  }

  const [, frontmatter, body] = match as RegExpExecArray
  const data = Bun.YAML.parse(frontmatter) as Frontmatter

  if (!data?.title) {
    fail(`${slug}.mdx is missing a title`)
  }

  return { slug, data, body: body.trim() }
}

const readPages = (): Page[] =>
  readdirSync(contentDir)
    .filter((file) => file.endsWith('.mdx'))
    .sort()
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      return parsePage(slug, readFileSync(join(contentDir, file), 'utf8'))
    })

// shields.io reads `-` as its field separator and `_` as a space, so both have
// to be doubled before the label is URL-encoded.
const badgeLabel = (text: string) =>
  encodeURIComponent(text.toUpperCase().replace(/-/g, '--').replace(/_/g, '__'))

const badgeUrl = (text: string, logo?: string) => {
  const params = new URLSearchParams({ style: 'for-the-badge' })

  if (logo) {
    params.set('logo', logo)
  }

  params.set('logoColor', 'ffffff')

  return `https://img.shields.io/badge/${badgeLabel(text)}-${BADGE_BACKGROUND}?${params
    .toString()
    .replace(/%2F/g, '/')}`
}

const badge = (text: string, logo?: string) => `![${text}](${badgeUrl(text, logo)})`

const linkedBadge = ({ label, href, icon }: ProjectLink) =>
  `[![${label}](${badgeUrl(label, icon ? LINK_LOGOS[icon] : undefined)})](${href})`

// Website images are served from `public/`; the README sits next to a mirrored
// copy, so its paths have to be relative instead.
const readmeImagePath = (src: string) => {
  if (!src.startsWith(IMAGES_URL_PREFIX)) {
    fail(`image "${src}" must start with ${IMAGES_URL_PREFIX}`)
  }

  return `./projects/${src.slice(IMAGES_URL_PREFIX.length)}`
}

const assertImageExists = (src: string) => {
  const path = resolve(publicImagesDir, src.slice(IMAGES_URL_PREFIX.length))

  try {
    if (!statSync(path).isFile()) {
      fail(`image "${src}" is not a file`)
    }
  } catch {
    fail(`image "${src}" was not found at ${path}`)
  }
}

const renderImageTable = (images: ProjectImage[]) => {
  const columns = images.length <= 2 ? images.length : 3
  const width = Math.floor(100 / columns)
  const rows: ProjectImage[][] = []

  for (let index = 0; index < images.length; index += columns) {
    rows.push(images.slice(index, index + columns))
  }

  const cells = (row: ProjectImage[]) =>
    row
      .map(
        ({ src, alt }) =>
          `    <td width="${width}%" align="center">\n` +
          `      <img src="${readmeImagePath(src)}" alt="${alt}" />\n` +
          `    </td>`,
      )
      .join('\n')

  return [
    '<table>',
    rows.map((row) => `  <tr>\n${cells(row)}\n  </tr>`).join('\n'),
    '</table>',
  ].join('\n')
}

const renderProject = ({ data, body }: Page) => {
  const { title, description, license, year, stack = [], links = [], images = [] } = data
  const summary = [description, license, year?.toString()].filter(Boolean).join(' · ')
  const hero = images.filter(({ layout }) => layout === 'hero')
  const grid = images.filter(({ layout }) => layout !== 'hero')
  const sections = [`## <samp>// ${title.toUpperCase()}</samp>`]

  for (const image of images) {
    assertImageExists(image.src)
  }

  if (summary) {
    sections.push(summary)
  }

  for (const { src, alt } of hero) {
    sections.push(`<p align="center">\n  <img src="${readmeImagePath(src)}" alt="${alt}" />\n</p>`)
  }

  if (grid.length > 0) {
    sections.push(renderImageTable(grid))
  }

  if (body) {
    sections.push(body)
  }

  if (stack.length > 0) {
    sections.push('### Tech stack')
    sections.push(stack.map((item) => badge(item, STACK_LOGOS[item])).join(' '))
  }

  if (links.length > 0) {
    sections.push('### Links')
    sections.push(links.map(linkedBadge).join(' '))
  }

  return sections.join('\n\n')
}

const renderHeader = (index: Page) => {
  const website = new URL(siteConfig.url).host
  const socials: ProjectLink[] = [
    { label: website, href: siteConfig.url, icon: 'chrome' },
    { label: 'GitHub', href: siteConfig.links.github, icon: 'github' },
    { label: 'X', href: siteConfig.links.x, icon: 'x' },
    { label: 'LinkedIn', href: siteConfig.links.linkedin, icon: 'linkedin' },
  ]

  const badges = socials
    .map(
      ({ label, href, icon }) =>
        `  <a href="${href}"><img src="${badgeUrl(label, icon ? LINK_LOGOS[icon] : undefined)}" alt="${label}" /></a>`,
    )
    .join('\n')

  const title = [
    `<h1 align="center">\n  ${siteConfig.name} - ${index.data.title}\n</h1>`,
    index.data.description ? `<p align="center">\n  ${index.data.description}\n</p>` : null,
  ]
    .filter((section): section is string => section !== null)
    .join('\n')

  return [title, `<p align="center">\n${badges}\n</p>`].join('\n\n')
}

const pages = readPages()
const index = pages.find(({ slug }) => slug === 'index')

if (!index) {
  fail('content/portfolio/index.mdx is required for the README header')
}

const projects = pages
  .filter(({ slug }) => slug !== 'index')
  .sort((a, b) => (b.data.year ?? 0) - (a.data.year ?? 0))

if (projects.length === 0) {
  fail('no project pages found in content/portfolio')
}

const readme = [renderHeader(index as Page), ...projects.map(renderProject)].join('\n\n')

writeFileSync(readmePath, `${readme}\n`, 'utf8')

// `portfolio/projects` is generated output, so it is rebuilt from `public/` to
// keep renamed or deleted screenshots from lingering.
rmSync(outputImagesDir, { recursive: true, force: true })
mkdirSync(outputImagesDir, { recursive: true })
cpSync(publicImagesDir, outputImagesDir, { recursive: true })

const copied = readdirSync(outputImagesDir, { recursive: true }).filter((entry) =>
  String(entry).includes('.'),
).length

console.log(
  `portfolio:readme — wrote README.md (${projects.length} projects) and mirrored ${copied} images`,
)
