import { ExternalLink, Heading, SectionPortfolioItem, Title } from 'components';
import { data } from 'data';
import Link from 'next/link';

export const SectionPortfolio = () => (
  <>
    <Title title="Hey, I'm Breno Polanski 👋" />

    <div className="mt-5">
      <Link href="/" passHref>
        <ExternalLink className="text-xl font-semibold bg-theme-highlight" isExternal={false}>
          ← Back
        </ExternalLink>
      </Link>
    </div>

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
