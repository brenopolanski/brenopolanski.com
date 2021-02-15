import { appConfig } from 'appConfig';
import {
  Footer,
  SectionAbout,
  SectionExperience,
  SectionFindMe,
  SectionProjects,
  SectionPublications,
} from 'components';
import { Page, Section } from 'layouts';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{`${appConfig.name} | ${appConfig.description}`}</title>
        <meta name="description" content={appConfig.description} />
        <link rel="canonical" href={appConfig.homepage} />
      </Head>

      <Page>
        <Section className="flex-1 max-w-2xl">
          <SectionAbout />
          <SectionProjects />
          <SectionExperience />
          <SectionPublications />
          <SectionFindMe />
          <Footer />
        </Section>
      </Page>
    </>
  );
}
