/* eslint-disable sort-keys-custom-order-fix/sort-keys-custom-order-fix */
import { ENV } from './env'

export const siteConfig = {
  name: 'Breno Polanski',
  description: 'Indie hacker. Web3 Developer. Open source enthusiast. Always learning. Usually from my mistakes.',
  url: ENV.SITE_URL,
  // ogImage: '/og-image.png',
  themeColor: {
    light: '#FFFFFF',
    dark: '#09090B',
  },
  links: {
    twitter: 'https://twitter.com/brenopolanski',
    github: 'https://github.com/brenopolanski',
    linkedin: 'https://linkedin.com/in/brenopolanski',
  },
  creator: {
    name: 'Breno Polanski',
    twitter: '@brenopolanski',
    url: 'https://brenopolanski.com',
    emails: {
      personal: 'breno.polanski@gmail.com',
      newsletter: 'hi@brenopolanski.com',
    },
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
