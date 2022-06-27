import { Heading } from './Heading'
import { PortfolioItem } from './PortfolioItem'

interface ISectionProjectProps {
  project: Record<string, any>
}

export const SectionProject = ({ project }: ISectionProjectProps) => (
  <div className="mt-16">
    <Heading title="Portfolio" />
    <div className="space-y-12">
      <PortfolioItem project={project} showMore />
    </div>
  </div>
)
