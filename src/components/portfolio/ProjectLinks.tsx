import Link from 'next/link'

import { ProjectSectionTitle } from '@/components/portfolio/ProjectSectionTitle'
import { ANALYTICS_EVENTS } from '@/lib/analytics'
import type { ProjectLink } from '@/lib/source'
import { generateReactKey } from '@/lib/utils'

interface ProjectLinksProps {
  links: ProjectLink[]
}

export const ProjectLinks = ({ links }: ProjectLinksProps) => {
  if (links.length === 0) {
    return null
  }

  return (
    <div className="not-prose my-6">
      <ProjectSectionTitle title="Links" />
      <div className="flex flex-wrap gap-2">
        {links.map(({ label, href }, index) => (
          <Link
            key={generateReactKey('portfolio-link', index)}
            className="rounded-md border border-fd-border px-3 py-1.5 font-mono text-xs uppercase transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            data-analytics-event={ANALYTICS_EVENTS.projectClick}
            data-analytics-location="portfolio"
            data-analytics-target={href}
            href={href}
            prefetch={false}
            rel="noopener noreferrer"
            target="_blank"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
