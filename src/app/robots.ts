import type { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}

export default robots
