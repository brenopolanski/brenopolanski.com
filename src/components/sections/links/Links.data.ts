import { FileTextIcon, GithubIcon, LinkedInIcon, XTwitterIcon } from '@/components/Icons'
import { paths } from '@/config/paths'
import { siteConfig } from '@/config/site'

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
    href: siteConfig.links.twitter,
    isExternal: true,
  },
  {
    title: 'GitHub',
    icon: GithubIcon,
    href: siteConfig.links.github,
    isExternal: true,
  },
  {
    title: 'LinkedIn',
    icon: LinkedInIcon,
    href: siteConfig.links.linkedin,
    isExternal: true,
  },
  {
    title: 'Resume',
    icon: FileTextIcon,
    href: paths.resume,
    isExternal: false,
  },
] as const
