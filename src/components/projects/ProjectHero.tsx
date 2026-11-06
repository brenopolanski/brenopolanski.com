import Image from 'next/image'

import { ExternalLinkIcon, GithubIcon } from '@/components/shared/Icons'
import { LinkButton } from '@/components/shared/link/LinkButton'
import { ANALYTICS_EVENTS } from '@/lib/analytics'
import type { Project } from '@/lib/projects'
import { generateReactKey } from '@/lib/utils'

const linkIcons: Record<string, React.ElementType> = {
  GitHub: GithubIcon,
}

interface ProjectHeroProps {
  project: Project
}

export const ProjectHero = ({ project }: ProjectHeroProps) => {
  const links = Object.entries({ ...project.mainLinks, ...project.links })

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <Image
        alt={`${project.title} icon`}
        className="size-24 shrink-0"
        height={512}
        quality={95}
        src={project.iconUrl}
        width={512}
        priority
      />

      <div className="space-y-3">
        <h1 className="text-3xl font-bold uppercase md:text-4xl">{project.title}</h1>
        <p className="text-base text-balance text-muted-foreground">{project.subtitle}</p>
      </div>

      {links.length > 0 && (
        <div
          className={
            links.length === 2
              ? 'mx-auto grid w-full max-w-sm grid-cols-2 gap-4'
              : links.length >= 4
                ? 'grid w-full grid-cols-2 gap-4'
                : 'grid w-full grid-cols-2 gap-4 sm:grid-cols-3'
          }
        >
          {links.map(([title, href]) => {
            const Icon = linkIcons[title] ?? ExternalLinkIcon

            return (
              <LinkButton
                key={generateReactKey('link', title)}
                data-analytics-event={ANALYTICS_EVENTS.projectLinkClick}
                data-analytics-link={title}
                data-analytics-project={project.slug}
                data-analytics-target={href}
                href={href}
                icon={<Icon className="size-5 shrink-0" />}
                isExternal={!href.startsWith('/')}
                title={title}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
