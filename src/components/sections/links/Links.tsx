import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn, generateReactKey } from '@/lib/utils'

import type { LinkItem } from './Links.data'
import { linkData } from './Links.data'

export const Links = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('grid grid-cols-2 gap-4', className)} {...props}>
      {linkData.map(({ title, href, icon: Icon, event, isExternal, isWide }: LinkItem, index) => (
        <Button
          key={generateReactKey('link', index)}
          className={cn(
            'flex h-auto w-full cursor-pointer flex-col items-center gap-2 bg-zinc-50 py-4 shadow-none',
            isWide && 'col-span-2',
          )}
          variant="outline"
          asChild
        >
          <Link
            data-analytics-event={event}
            data-analytics-location="links"
            data-analytics-target={href}
            href={href}
            prefetch={false}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            target={isExternal ? '_blank' : undefined}
          >
            <Icon className="size-5 shrink-0" />
            <span className="text-sm">{title}</span>
          </Link>
        </Button>
      ))}
    </div>
  )
}
