import { appConfig } from 'appConfig';
import { Content, ExternalLink, Title } from 'components';
import Link from 'next/link';

export const SectionAbout = () => (
  <>
    <Title title="Hey, I'm Breno Polanski 👋" />

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
      <Link href="/portfolio" passHref>
        <ExternalLink className="text-xl font-semibold bg-theme-highlight" isExternal={false}>
          My Portfolio →
        </ExternalLink>
      </Link>
    </div>
  </>
);
