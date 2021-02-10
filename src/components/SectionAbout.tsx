import { appConfig } from 'appConfig';
import { Content, ExternalLink, RouterLink, Title } from 'components';
import Link from 'next/link';

type SectionAboutProps = {
  backLink?: string;
  showBackLink?: boolean;
};

export const SectionAbout = ({ backLink = '/', showBackLink = false }: SectionAboutProps) => (
  <>
    <Link href="/">
      <a>
        <Title title="Hey, I'm Breno Polanski 👋" />
      </a>
    </Link>

    <Content>
      Front End Engineer based in Brazil. Mainly focused on web development and helping other people by giving
      presentations, writing articles and creating{' '}
      <ExternalLink href={appConfig.social.github}>open source projects</ExternalLink>. Skills in Node.js,
      JavaScript/TypeScript (React ecosystem and Vue.js), HTML5, CSS and Responsive interfaces.
    </Content>

    <Content>
      As a programmer, I&apos;m in a constant search for better practices and also experimenting new things.
    </Content>

    <Content>
      I&apos;m an active open source contributor:{' '}
      <ExternalLink href={appConfig.social.github}>{appConfig.social.github}</ExternalLink>
    </Content>

    <div className="mt-5">
      {!showBackLink ? (
        <RouterLink className="text-xl font-semibold" href="/portfolio">
          My Portfolio →
        </RouterLink>
      ) : (
        <RouterLink className="text-xl font-semibold" href={backLink}>
          ← Back
        </RouterLink>
      )}
    </div>
  </>
);
