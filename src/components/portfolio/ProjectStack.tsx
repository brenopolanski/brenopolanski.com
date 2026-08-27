import { ProjectSectionTitle } from '@/components/portfolio/ProjectSectionTitle'
import { generateReactKey } from '@/lib/utils'

interface ProjectStackProps {
  stack: string[]
}

export const ProjectStack = ({ stack }: ProjectStackProps) => {
  if (stack.length === 0) {
    return null
  }

  return (
    <div className="not-prose my-6">
      <ProjectSectionTitle title="Tech stack" />
      <ul className="flex flex-wrap gap-2">
        {stack.map((item, index) => (
          <li
            key={generateReactKey('portfolio-stack', index)}
            className="rounded-md border border-fd-border bg-fd-secondary px-2.5 py-1 font-mono text-xs text-fd-secondary-foreground uppercase"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
