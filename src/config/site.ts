/* eslint-disable sort-keys-custom-order-fix/sort-keys-custom-order-fix */

export const siteConfig = {
  name: 'Breno Polanski',
  description: 'Indie hacker. Web3 Developer. Open source enthusiast. Always learning. Usually from my mistakes.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://brenopolanski.com',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/brenopolanski',
    github: 'https://github.com/brenopolanski',
    linkedin: 'https://linkedin.com/in/brenopolanski',
  },
  creator: {
    name: 'Breno Polanski',
    twitter: '@brenopolanski',
    url: 'https://brenopolanski.com',
    email: 'breno.polanski@gmail.com',
  },
  keywords: [
    'Breno Polanski',
    'Web3',
    'Developer',
    'Software Engineer',
    'Open Source',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
  ],
  meta: {
    language: 'en',
    locale: 'en_US',
    theme: {
      default: 'system',
    },
  },
} as const

export type TSiteConfig = typeof siteConfig
