import type { MetadataRoute } from 'next'

import { paths } from '@/config/paths'
import { siteConfig } from '@/config/site'

const entries = [
  { path: paths.home, priority: 1 },
  { path: paths.resume, priority: 0.8 },
]

const sitemap = (): MetadataRoute.Sitemap => {
  return entries.map(({ path, priority }) => ({
    url: new URL(path, siteConfig.url).href,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }))
}

export default sitemap
