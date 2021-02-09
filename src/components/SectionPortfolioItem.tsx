import { Content, ExternalLink } from 'components';
import Image from 'next/image';
import Link from 'next/link';

type SectionPortfolioItemProps = {
  project: Record<string, any>;
};

export const SectionPortfolioItem = ({ project }: SectionPortfolioItemProps) => {
  return (
    <div className="space-y-2">
      <Link href={`/portfolio/${project.slug}`} passHref>
        <ExternalLink className="text-xl font-semibold" isExternal={false}>
          {project.title}
        </ExternalLink>
      </Link>

      <Content>{project.description}</Content>

      <Image
        className="w-full h-full rounded"
        src={`/images/portfolio/${project.slug}/${project.preview}`}
        width={1366}
        height={768}
        alt={project.title}
      />
    </div>
  );
};
