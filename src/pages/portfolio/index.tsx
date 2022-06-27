import Head from 'next/head'

import { Footer, SectionAbout, SectionPortfolio } from '@/components'
import { Page, Section } from '@/components/layouts'
import { siteConfig } from '@/siteConfig'

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>{`Portfolio | ${siteConfig.name}`}</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="canonical" href={`${siteConfig.homepage}/portfolio`} />
      </Head>

      <Page>
        <Section className="flex-1 max-w-2xl">
          <SectionAbout showBackLink={true} />
          <SectionPortfolio />
          <Footer />
        </Section>
      </Page>
    </>
  )
}
