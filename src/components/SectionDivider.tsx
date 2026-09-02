import { cn } from '@/lib/utils'

interface SectionDividerProps extends React.ComponentProps<'div'> {
  title: string
}

export const SectionDivider = ({ className, title, ...props }: SectionDividerProps) => {
  return (
    <div className={cn('flex items-center justify-center gap-4', className)} {...props}>
      <div className="h-px w-full bg-muted-foreground/20" />
      <span className="text-center text-xs font-medium text-muted-foreground">{title}</span>
      <div className="h-px w-full bg-muted-foreground/20" />
    </div>
  )
}
