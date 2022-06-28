import { siteData } from '@/data'
import { siteConfig } from '@/siteConfig'

import { Content } from './Content'
import { ExternalLink } from './ExternalLink'
import { Heading } from './Heading'

export const SectionProjects = () => (
  <div className="mt-16">
    <Heading title="Projects" />

    <div className="space-y-6">
      {siteData.projects
        .filter((project) => project.isVisible)
        .map((project, index) => (
          <div key={index} className="space-y-2">
            <ExternalLink className="text-xl font-semibold" href={project.link}>
              {project.title}
            </ExternalLink>
            <Content>{project.content}</Content>
          </div>
        ))}
    </div>

    <div className="mt-5">
      <ExternalLink className="text-xl font-semibold" href={siteConfig.social.github}>
        More Projects →
      </ExternalLink>
    </div>
  </div>
)
