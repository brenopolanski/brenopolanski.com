import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn, generateReactKey } from '@/lib/utils'

import type { ILink } from './Links.data'
import { linkData } from './Links.data'

interface ILinkProps extends React.HTMLAttributes<HTMLDivElement> {
  isExternal?: boolean
}

export const Links = ({ className, isExternal = false, ...props }: ILinkProps) => {
  return (
    <div className={cn('grid grid-cols-2 gap-4', className)} {...props}>
      {linkData.map(({ title, href, Icon }: ILink, index) => (
        <Button
          key={generateReactKey('link', index)}
          className="flex h-auto w-full cursor-pointer flex-col items-center gap-2 bg-zinc-50 py-4 shadow-none"
          variant="outline"
          asChild
        >
          <Link
            href={href}
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
