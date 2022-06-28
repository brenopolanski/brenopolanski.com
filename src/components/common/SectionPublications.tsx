import { siteData } from '@/data'

import { Content } from './Content'
import { Heading } from './Heading'
import { Link } from './Link'

export const SectionPublications = () => (
  <div className="mt-16">
    <Heading title="Publications" />
    <div className="space-y-6">
      {siteData.publications.map((publication, index) => (
        <div key={index} className="space-y-2">
          <Link className="text-xl font-semibold" href={publication.link} isExternal>
            {publication.title}
          </Link>
          <Content>{publication.content}</Content>
        </div>
      ))}
    </div>
  </div>
)
