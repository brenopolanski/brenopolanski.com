import { Heading, SectionPortfolioItem, Title } from 'components';
import { data } from 'data';
import Link from 'next/link';

export const SectionPortfolio = () => (
  <>
    <Link href="/">
      <a>
        <Title title="Hey, I'm Breno Polanski 👋" />
      </a>
    </Link>

    <div className="mt-16">
      <Heading title="Portfolio" />
      <div className="space-y-12">
        {data.portfolio.map((project, index) => (
          <SectionPortfolioItem key={index} project={project} />
        ))}
      </div>
    </div>
  </>
);
