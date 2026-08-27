import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

import { siteConfig } from '@/config/site'

const navTitle = '// PORTFOLIO'

export const baseOptions = (): BaseLayoutProps => ({
  githubUrl: siteConfig.links.github,
  nav: {
    title: <span className="font-mono font-semibold">{navTitle}</span>,
    url: '/portfolio',
  },
  links: [
    {
      text: 'Home',
      url: '/',
      active: 'none',
    },
  ],
})
