const siteName = 'Breno Polanski'
const siteUrl = 'https://brenopolanski.com'

export const siteConfig = {
  name: siteName,
  description:
    'Software Engineer. Indie hacker. Open source enthusiast. Always learning. Usually from my mistakes.',
  url: siteUrl,
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
    url: siteUrl,
    emails: {
      personal: 'breno.polanski@gmail.com',
      newsletter: 'hi@brenopolanski.com',
    },
  },
  keywords: [
    siteName,
    'portfolio',
    'indie hacker',
    'web3',
    'developer',
    'software engineer',
    'full stack developer',
    'front-end engineer',
    'open source',
    'javascript',
    'typescript',
    'react',
    'next.js',
    'node.js',
  ],
} as const
