import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

import matter from 'gray-matter'

const appsDir = join(process.cwd(), 'src/content/apps')

export interface AppFrontmatter {
  title: string
  subtitle: string
  pubDate: string
  platforms: string[]
  requirement?: string
  isPaid?: boolean
  priceLabel?: string
  priceNote?: string
  isMenuBarApp?: boolean
  repoUrl?: string
  mainLinks?: Record<string, string>
  links?: Record<string, string>
}

export interface App extends AppFrontmatter {
  slug: string
  content: string
  iconUrl: string
  bannerUrl: string
}

const toApp = (slug: string, file: string): App => {
  const { data, content } = matter(file)
  const frontmatter = data as AppFrontmatter

  return {
    ...frontmatter,
    // gray-matter parses an unquoted YAML date into a Date, which a Server
    // Component cannot pass to the client.
    pubDate: String(frontmatter.pubDate),
    slug,
    content,
    iconUrl: `/apps/${slug}/icon.png`,
    bannerUrl: `/apps/${slug}/banner.png`,
  }
}

export const getAppSlugs = async () => {
  const files = await readdir(appsDir)
  return files.filter((file) => file.endsWith('.md')).map((file) => file.replace(/\.md$/, ''))
}

export const getApp = async (slug: string) => {
  const slugs = await getAppSlugs()

  if (!slugs.includes(slug)) {
    return null
  }

  const file = await readFile(join(appsDir, `${slug}.md`), 'utf8')

  return toApp(slug, file)
}
