import type { MetadataRoute } from 'next'

import { paths } from '@/config/paths'
import { siteConfig } from '@/config/site'

const sitemap = (): MetadataRoute.Sitemap => [
  {
    changeFrequency: 'monthly',
    lastModified: new Date().toISOString(),
    priority: 1,
    url: siteConfig.url,
  },
  {
    changeFrequency: 'monthly',
    lastModified: new Date().toISOString(),
    priority: 0.8,
    url: `${siteConfig.url}/${paths.resume}`,
  },
]

export default sitemap
