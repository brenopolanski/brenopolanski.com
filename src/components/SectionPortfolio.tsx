import { Heading, PortfolioItem } from 'components'
import { siteData } from 'data'

export const SectionPortfolio = () => (
  <div className="mt-16">
    <Heading title="Portfolio" />
    <div className="space-y-12">
      {siteData.portfolio
        .filter((project) => project.isVisible)
        .map((project, index) => (
          <PortfolioItem key={index} project={project} showMore={false} />
        ))}
    </div>
  </div>
)
