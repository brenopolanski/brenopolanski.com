import { LinkButton } from '@/components/shared/LinkButton'
import { ANALYTICS_EVENTS } from '@/lib/analytics'
import { cn, generateReactKey } from '@/lib/utils'

import type { LinkItem } from './Links.data'
import { linkData } from './Links.data'

export const Links = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('grid grid-cols-2 gap-4', className)} {...props}>
      {linkData.map(({ title, href, icon: Icon, isExternal }: LinkItem, index) => (
        <LinkButton
          key={generateReactKey('link', index)}
          data-analytics-event={
            title === 'Resume' ? ANALYTICS_EVENTS.resumeClick : ANALYTICS_EVENTS.socialClick
          }
          data-analytics-location="links"
          data-analytics-target={href}
          href={href}
          icon={<Icon className="size-5 shrink-0" />}
          isExternal={isExternal}
          title={title}
        />
      ))}
    </div>
  )
}
