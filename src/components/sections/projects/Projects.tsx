import { LinkCard } from '@/components/LinkCard'
import { cn, generateReactKey } from '@/lib/utils'

import type { ProjectItem } from './Projects.data'
import { projectData } from './Projects.data'

export const Projects = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      {projectData.map(
        ({ title, description, icon: Icon, href, isExternal }: ProjectItem, index) => (
          <LinkCard
            key={generateReactKey('project', index)}
            description={description}
            href={href}
            icon={<Icon className="mr-4 size-6 shrink-0" />}
            isExternal={isExternal}
            title={title}
          />
        ),
      )}
    </div>
  )
}
