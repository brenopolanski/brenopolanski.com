import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface LinkButtonProps extends React.ComponentProps<typeof Link> {
  icon: React.ReactNode
  title: string
  isExternal?: boolean
}

export const LinkButton = ({
  className,
  icon,
  title,
  isExternal = false,
  ...props
}: LinkButtonProps) => {
  return (
    <Button
      className={cn(
        'flex h-auto w-full cursor-pointer flex-col items-center gap-2 bg-zinc-50 py-4 shadow-none',
        className,
      )}
      variant="outline"
      asChild
    >
      <Link
        prefetch={false}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        target={isExternal ? '_blank' : undefined}
        {...props}
      >
        {icon}
        <span className="text-sm">{title}</span>
      </Link>
    </Button>
  )
}
