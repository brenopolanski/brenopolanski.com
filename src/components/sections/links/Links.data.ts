import {
  BriefcaseIcon,
  FileTextIcon,
  GithubIcon,
  LinkedInIcon,
  XTwitterIcon,
} from '@/components/Icons'
import { paths } from '@/config/paths'
import { siteConfig } from '@/config/site'
import type { AnalyticsEventName } from '@/lib/analytics'
import { ANALYTICS_EVENTS } from '@/lib/analytics'

export interface LinkItem {
  title: string
  href: string
  icon: React.ElementType
  event: AnalyticsEventName
  isExternal?: boolean
  /** Spans both grid columns, keeping the remaining pairs even. */
  isWide?: boolean
}

export const linkData: LinkItem[] = [
  {
    icon: BriefcaseIcon,
    title: 'Portfolio',
    href: paths.portfolio,
    event: ANALYTICS_EVENTS.portfolioClick,
    isWide: true,
  },
  {
    icon: XTwitterIcon,
    title: 'X (Twitter)',
    href: siteConfig.links.x,
    event: ANALYTICS_EVENTS.socialClick,
    isExternal: true,
  },
  {
    icon: GithubIcon,
    title: 'GitHub',
    href: siteConfig.links.github,
    event: ANALYTICS_EVENTS.socialClick,
    isExternal: true,
  },
  {
    icon: LinkedInIcon,
    title: 'LinkedIn',
    href: siteConfig.links.linkedin,
    event: ANALYTICS_EVENTS.socialClick,
    isExternal: true,
  },
  {
    icon: FileTextIcon,
    title: 'Resume',
    href: paths.resume,
    event: ANALYTICS_EVENTS.resumeClick,
    isExternal: true,
  },
] as const
