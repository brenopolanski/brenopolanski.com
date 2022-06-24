import { Content, ExternalLink, Heading } from 'components'
import { siteConfig, siteData } from 'data'

export const SectionProjects = () => (
  <div className="mt-16">
    <Heading title="Projects" />

    <div className="space-y-6">
      {siteData.projects.map((project, index) => (
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
