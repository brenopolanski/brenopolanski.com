import { siteData } from '@/data'
import { siteConfig } from '@/siteConfig'

import { Content } from './Content'
import { Heading } from './Heading'
import { Link } from './Link'

export const SectionProjects = () => (
  <div className="mt-16">
    <Heading title="Projects" />

    <div className="space-y-6">
      {siteData.projects
        .filter((project) => project.isVisible)
        .map((project, index) => (
          <div key={index} className="space-y-2">
            <Link className="text-xl font-semibold" href={project.link} isExternal>
              {project.title}
            </Link>
            <Content>{project.content}</Content>
          </div>
        ))}
    </div>

    <div className="mt-5">
      <Link className="text-xl font-semibold" href={siteConfig.social.github} isExternal>
        More Projects →
      </Link>
    </div>
  </div>
)
