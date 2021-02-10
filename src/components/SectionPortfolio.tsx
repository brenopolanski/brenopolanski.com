import { Heading, PortfolioItem } from 'components';
import { data } from 'data';

export const SectionPortfolio = () => (
  <div className="mt-16">
    <Heading title="Portfolio" />
    <div className="space-y-12">
      {data.portfolio
        .filter((project) => project.isVisible)
        .map((project, index) => (
          <PortfolioItem key={index} project={project} showMore={false} />
        ))}
    </div>
  </div>
);
