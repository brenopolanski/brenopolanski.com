import { FileTextIcon, GithubIcon, LinkedInIcon, XTwitterIcon } from '@/components/Icons'

export interface ILink {
  title: string
  href: string
  icon: React.ElementType
  isExternal?: boolean
}

export const linkData: ILink[] = [
  {
    title: 'X (Twitter)',
    icon: XTwitterIcon,
    href: 'https://twitter.com/brenopolanski',
    isExternal: true,
  },
  {
    title: 'GitHub',
    icon: GithubIcon,
    href: 'https://github.com/brenopolanski',
    isExternal: true,
  },
  {
    title: 'LinkedIn',
    icon: LinkedInIcon,
    href: 'https://linkedin.com/in/brenopolanski',
    isExternal: true,
  },
  {
    title: 'Resume',
    icon: FileTextIcon,
    href: '/resume.pdf',
    isExternal: false,
  },
] as const
