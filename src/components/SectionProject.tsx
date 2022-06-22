import { Heading, PortfolioItem } from 'components'

type SectionProjectProps = {
  project: Record<string, any>
}

export const SectionProject = ({ project }: SectionProjectProps) => (
  <div className="mt-16">
    <Heading title="Portfolio" />
    <div className="space-y-12">
      <PortfolioItem project={project} showMore />
    </div>
  </div>
)
