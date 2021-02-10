import { appConfig } from 'appConfig';
import { Footer, SectionAbout, SectionPortfolio } from 'components';
import { Page, Section } from 'layouts';
import Head from 'next/head';

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>{`Portfolio | ${appConfig.name}`}</title>
        <meta name="description" content={appConfig.description} />
        <link rel="canonical" href={`${appConfig.homepage}/portfolio`} />
      </Head>

      <Page>
        <Section className="flex-1 max-w-2xl">
          <SectionAbout showBackLink={true} />
          <SectionPortfolio />
          <Footer />
        </Section>
      </Page>
    </>
  );
}
