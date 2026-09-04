import type { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next/', '/api/'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}

export default robots
