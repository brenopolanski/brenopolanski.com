import type { MetadataRoute } from 'next'

import { paths } from '@/config/paths'
import { siteConfig } from '@/config/site'
import { getAppSlugs } from '@/lib/apps'
import { getProjectSlugs } from '@/lib/projects'

const entries = [
  { path: paths.home, priority: 1 },
  { path: paths.resume, priority: 0.8 },
  { path: paths.apps.terms, priority: 0.5 },
]

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const [appSlugs, projectSlugs] = await Promise.all([getAppSlugs(), getProjectSlugs()])
  const apps = appSlugs.flatMap((slug) => [
    { path: `/apps/${slug}`, priority: 0.9 },
    { path: `/apps/${slug}/privacy-policy`, priority: 0.5 },
  ])
  const projects = projectSlugs.map((slug) => ({ path: `/projects/${slug}`, priority: 0.9 }))

  return [...entries, ...apps, ...projects].map(({ path, priority }) => ({
    url: new URL(path, siteConfig.url).href,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }))
}

export default sitemap
