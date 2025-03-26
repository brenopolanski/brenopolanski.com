import type { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'

const robots = (): MetadataRoute.Robots => ({
  host: siteConfig.url,
  rules: {
    allow: '/',
    disallow: ['/_next/', '/api/'],
    userAgent: '*',
  },
  sitemap: `${siteConfig.url}/sitemap.xml`,
})

export default robots
