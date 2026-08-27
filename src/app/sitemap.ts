import type { MetadataRoute } from 'next'

import { paths } from '@/config/paths'
import { siteConfig } from '@/config/site'
import { source } from '@/lib/source'

const url = (path: string) => new URL(path, siteConfig.url).toString()

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date().toISOString()

  return [
    {
      changeFrequency: 'monthly',
      lastModified,
      priority: 1,
      url: siteConfig.url,
    },
    {
      changeFrequency: 'monthly',
      lastModified,
      priority: 0.8,
      url: url(paths.resume),
    },
    ...source.getPages().map((page) => ({
      changeFrequency: 'monthly' as const,
      lastModified,
      priority: page.url === paths.portfolio ? 0.8 : 0.6,
      url: url(page.url),
    })),
  ]
}

export default sitemap
