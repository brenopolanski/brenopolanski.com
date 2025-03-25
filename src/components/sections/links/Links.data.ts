import { FileText, Github, Linkedin } from 'lucide-react'

import { XTwitterIcon } from '@/components/Icons'

export interface ILink {
  title: string
  href: string
  Icon: React.ElementType
  isExternal?: boolean
}

export const linkData: ILink[] = [
  {
    title: 'X (Twitter)',
    Icon: XTwitterIcon,
    href: 'https://twitter.com/brenopolanski',
    isExternal: true,
  },
  {
    title: 'GitHub',
    Icon: Github,
    href: 'https://github.com/brenopolanski',
    isExternal: true,
  },
  {
    title: 'LinkedIn',
    Icon: Linkedin,
    href: 'https://linkedin.com/in/brenopolanski',
    isExternal: true,
  },
  {
    title: 'Resume',
    Icon: FileText,
    href: '/resume.pdf',
    isExternal: false,
  },
] as const
