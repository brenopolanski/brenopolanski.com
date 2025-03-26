import { LinkCard } from '@/components/LinkCard'
import { cn, generateReactKey } from '@/lib/utils'

import type { IPrevWork } from './PrevWorks.data'
import { prevWorksData } from './PrevWorks.data'

export const PrevWorks = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      {prevWorksData.map(({ title, description, href, icon: Icon, isExternal }: IPrevWork, index) => (
        <LinkCard
          key={generateReactKey('prev-work', index)}
          description={description}
          href={href}
          icon={<Icon className="mr-4 size-6 shrink-0" />}
          isExternal={isExternal}
          title={title}
        />
      ))}
    </div>
  )
}
