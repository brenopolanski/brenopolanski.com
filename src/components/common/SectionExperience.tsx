import { siteData } from '@/data'

import { Content } from './Content'
import { Heading } from './Heading'
import { Link } from './Link'

export const SectionExperience = () => (
  <div className="mt-16">
    <Heading title="Experience" />
    <div className="space-y-6">
      {siteData.experiences.map((experience, index) => (
        <div key={index} className="space-y-2">
          <Link className="text-xl font-semibold" href={experience.link} isExternal>
            {experience.title}
          </Link>
          <Content>{experience.content}</Content>
        </div>
      ))}
    </div>
  </div>
)
