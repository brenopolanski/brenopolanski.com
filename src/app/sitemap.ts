import type { MetadataRoute } from 'next'

import { paths } from '@/config/paths'
import { siteConfig } from '@/config/site'
import { getAppSlugs } from '@/lib/apps'

const entries = [
  { path: paths.home, priority: 1 },
  { path: paths.resume, priority: 0.8 },
]

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const slugs = await getAppSlugs()
  const apps = slugs.flatMap((slug) => [
    { path: `/apps/${slug}`, priority: 0.9 },
    { path: `/apps/${slug}/privacy-policy`, priority: 0.5 },
  ])

  return [...entries, ...apps].map(({ path, priority }) => ({
    url: new URL(path, siteConfig.url).href,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }))
}

export default sitemap
