import Head from 'next/head'

import {
  Footer,
  SectionAbout,
  SectionExperience,
  SectionFindMe,
  SectionProjects,
  SectionPublications,
} from '@/components/common'
import { Page, Section } from '@/components/layouts'
import { siteConfig } from '@/siteConfig'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{`${siteConfig.name} | ${siteConfig.description}`}</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="canonical" href={siteConfig.homepage} />
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
  )
}
