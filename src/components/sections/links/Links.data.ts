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
    icon: XTwitterIcon,
    title: 'X (Twitter)',
    href: siteConfig.links.twitter,
    isExternal: true,
  },
  {
    icon: GithubIcon,
    title: 'GitHub',
    href: siteConfig.links.github,
    isExternal: true,
  },
  {
    icon: LinkedInIcon,
    title: 'LinkedIn',
    href: siteConfig.links.linkedin,
    isExternal: true,
  },
  {
    icon: FileTextIcon,
    title: 'Resume',
    href: paths.resume,
    isExternal: true,
  },
] as const
