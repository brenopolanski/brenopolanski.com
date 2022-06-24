import { Content, ExternalLink, Heading } from 'components'
import { siteData } from 'data'

export const SectionPublications = () => (
  <div className="mt-16">
    <Heading title="Publications" />
    <div className="space-y-6">
      {siteData.publications.map((publication, index) => (
        <div key={index} className="space-y-2">
          <ExternalLink className="text-xl font-semibold" href={publication.link}>
            {publication.title}
          </ExternalLink>
          <Content>{publication.content}</Content>
        </div>
      ))}
    </div>
  </div>
)
