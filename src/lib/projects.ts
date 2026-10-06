import { access, readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

import matter from 'gray-matter'

const projectsDir = join(process.cwd(), 'src/content/projects')

export interface ProjectFrontmatter {
  title: string
  subtitle: string
  pubDate: string
  repoUrl?: string
  mainLinks?: Record<string, string>
  links?: Record<string, string>
  metaTitle?: string
  metaDescription?: string
}

export interface Project extends ProjectFrontmatter {
  slug: string
  content: string
  iconUrl: string
  bannerUrl: string
  ogImageUrl?: string
}

const toProject = (slug: string, file: string): Project => {
  const { data, content } = matter(file)
  const frontmatter = data as ProjectFrontmatter

  return {
    ...frontmatter,
    // gray-matter parses an unquoted YAML date into a Date, which a Server
    // Component cannot pass to the client.
    pubDate: String(frontmatter.pubDate),
    slug,
    content,
    iconUrl: `/projects/${slug}/icon.png`,
    bannerUrl: `/projects/${slug}/banner.png`,
  }
}

export const getProjectSlugs = async () => {
  const files = await readdir(projectsDir)
  return files.filter((file) => file.endsWith('.md')).map((file) => file.replace(/\.md$/, ''))
}

export const getProject = async (slug: string) => {
  const slugs = await getProjectSlugs()

  if (!slugs.includes(slug)) {
    return null
  }

  const file = await readFile(join(projectsDir, `${slug}.md`), 'utf8')
  const project = toProject(slug, file)
  const ogFile = join(process.cwd(), 'public', 'projects', slug, 'og.jpg')

  try {
    await access(ogFile)
    project.ogImageUrl = `/projects/${slug}/og.jpg`
  } catch {
    // The page banner stays the share image when no Open Graph file exists.
  }

  return project
}
