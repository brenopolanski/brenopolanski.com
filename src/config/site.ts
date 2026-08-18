import { ENV } from './env'

const siteName = 'Breno Polanski'
const description =
  'Indie hacker. Web3 Developer. Open source enthusiast. Always learning. Usually from my mistakes.'

export const siteConfig = {
  name: siteName,
  description,
  url: ENV.SITE_URL,
  themeColor: {
    light: '#FFFFFF',
    dark: '#09090B',
  },
  links: {
    x: 'https://x.com/brenopolanski',
    github: 'https://github.com/brenopolanski',
    linkedin: 'https://linkedin.com/in/brenopolanski',
  },
  author: {
    name: siteName,
    x: '@brenopolanski',
    url: ENV.SITE_URL,
    emails: {
      personal: 'breno.polanski@gmail.com',
      newsletter: 'hi@brenopolanski.com',
    },
  },
  keywords: [
    siteName,
    'Indie Hacker',
    'Web3',
    'Developer',
    'Software Engineer',
    'Full Stack Developer',
    'Front-End Engineer',
    'Open Source',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
  ],
} as const
