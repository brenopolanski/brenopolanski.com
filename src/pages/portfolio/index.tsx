import { SEO } from '@/components/_partials'
import { Footer, SectionAbout, SectionPortfolio } from '@/components/common'
import { Page, Section } from '@/components/layouts'
import { siteConfig } from '@/siteConfig'

export default function PortfolioPage() {
  return (
    <>
      <SEO title={`Portfolio | ${siteConfig.name}`} />

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
