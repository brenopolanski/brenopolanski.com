import type { Metadata } from 'next'

import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  appleWebApp: {
    title: siteConfig.name,
    capable: true,
    statusBarStyle: 'default',
  },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  keywords: [...siteConfig.keywords],
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        alt: siteConfig.name,
        height: 630,
        url: `${siteConfig.url}/api/og`,
        width: 1200,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.author.x,
    images: [`${siteConfig.url}/api/og`],
    site: siteConfig.url,
  },
}
