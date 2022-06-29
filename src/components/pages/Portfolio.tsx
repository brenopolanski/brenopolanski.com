import { SEO } from '@/components/_partials'
import { SectionAbout, SectionPortfolio } from '@/components/common'
import { siteConfig } from '@/siteConfig'

export const Portfolio = () => (
  <>
    <SEO title={`Portfolio | ${siteConfig.name}`} />

    <SectionAbout showBackLink />
    <SectionPortfolio />
  </>
)
