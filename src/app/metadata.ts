import type { Metadata } from 'next'

import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  appleWebApp: {
    title: siteConfig.name,
    capable: true,
    statusBarStyle: 'default',
  },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.creator.name, url: siteConfig.creator.url }],
  creator: siteConfig.creator.name,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { type: 'image/svg+xml', url: '/favicon.svg' },
      { sizes: '96x96', type: 'image/png', url: '/favicon-96x96.png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
    other: [
      {
        color: siteConfig.themeColor.dark,
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  keywords: [...siteConfig.keywords],
  manifest: '/site.webmanifest',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
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
    locale: siteConfig.meta.locale,
    siteName: siteConfig.name,
    type: 'website',
    url: siteConfig.url,
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    index: true,
  },
  twitter: {
    title: siteConfig.name,
    description: siteConfig.description,
    card: 'summary_large_image',
    creator: siteConfig.creator.twitter,
    images: [`${siteConfig.url}/api/og`],
  },
}
