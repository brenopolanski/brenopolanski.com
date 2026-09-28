import { ExternalLink } from '@/components/shared/ExternalLink'
import { AppleIcon } from '@/components/shared/Icons'
import { ANALYTICS_EVENTS } from '@/lib/analytics'

interface AppStoreBadgeProps {
  app: string
  href: string
}

export const AppStoreBadge = ({ app, href }: AppStoreBadgeProps) => {
  return (
    <ExternalLink
      className="inline-flex items-center gap-2 rounded-lg border border-white/80 bg-black px-3 py-1.5 font-sans text-white transition-transform hover:scale-110 md:h-[60px] md:w-[180px] md:gap-2.5 md:px-3.5 md:py-0"
      data-analytics-app={app}
      data-analytics-event={ANALYTICS_EVENTS.appLinkClick}
      data-analytics-link="App Store"
      data-analytics-target={href}
      href={href}
    >
      <AppleIcon className="size-7 shrink-0 md:size-8" />
      <span className="flex min-w-0 flex-col items-start leading-none">
        <span className="text-[0.65rem] font-medium md:text-xs">Download on the</span>
        <span className="text-xl font-semibold tracking-tight md:text-2xl">App Store</span>
      </span>
    </ExternalLink>
  )
}
