import Link from 'next/link'

import { cn } from '@/lib/utils'

import { If } from './If'

interface ILinkCardProps extends React.ComponentProps<typeof Link> {
  icon?: React.ReactNode
  title: string
  description: string
  isExternal?: boolean
}

export const LinkCard = ({ className, icon, title, description, isExternal = false, ...props }: ILinkCardProps) => {
  return (
    <Link
      className={cn(
        'hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 flex items-center rounded-lg border bg-zinc-50 p-4 transition-colors',
        className,
      )}
      prefetch={isExternal ? false : true}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
      {...props}
    >
      <If cond={Boolean(icon)}>{icon}</If>
      <div className="min-w-0 flex-grow">
        <p className="font-bold">{title}</p>
        <p className="text-muted-foreground truncate text-xs">{description}</p>
      </div>
    </Link>
  )
}
