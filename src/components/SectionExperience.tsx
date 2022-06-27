import { Content, ExternalLink, Heading } from '@/components'
import { siteData } from '@/data'

export const SectionExperience = () => (
  <div className="mt-16">
    <Heading title="Experience" />
    <div className="space-y-6">
      {siteData.experiences.map((experience, index) => (
        <div key={index} className="space-y-2">
          <ExternalLink className="text-xl font-semibold" href={experience.link}>
            {experience.title}
          </ExternalLink>
          <Content>{experience.content}</Content>
        </div>
      ))}
    </div>
  </div>
)
