import type { MetadataRoute } from 'next'

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
    url: `${siteConfig.url}/${siteConfig.links.resume}`,
  },
]

export default sitemap
