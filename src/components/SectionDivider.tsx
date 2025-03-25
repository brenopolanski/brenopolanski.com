import { cn } from '@/lib/utils'

interface ISectionDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

export const SectionDivider = ({ className, title, ...props }: ISectionDividerProps) => {
  return (
    <div className={cn('flex items-center justify-center gap-4', className)} {...props}>
      <div className="bg-muted-foreground/20 h-px w-full" />
      <span className="text-muted-foreground text-center text-xs font-medium">{title}</span>
      <div className="bg-muted-foreground/20 h-px w-full" />
    </div>
  )
}
