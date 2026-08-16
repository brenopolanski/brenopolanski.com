import Link from 'next/link'

import { cn } from '@/lib/utils'

interface ILinkCardProps extends React.ComponentProps<typeof Link> {
  icon?: React.ReactNode
  title: string
  description: string
  isExternal?: boolean
}

export const LinkCard = ({
  className,
  icon,
  title,
  description,
  isExternal = false,
  ...props
}: ILinkCardProps) => {
  return (
    <Link
      className={cn(
        'flex items-center rounded-lg border bg-zinc-50 p-4 transition-colors hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
        className,
      )}
      prefetch={isExternal ? false : true}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
      {...props}
    >
      {Boolean(icon) && icon}
      <div className="min-w-0 grow">
        <p className="font-bold">{title}</p>
        <p className="truncate text-xs text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}
