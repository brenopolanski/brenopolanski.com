import { NextPage } from 'next'

import { SEO } from '@/components/_partials'
import { Footer, SectionAbout, SectionProject } from '@/components/common'
import { Page, Section } from '@/components/layouts'
import { siteConfig } from '@/siteConfig'

interface IProjectProps {
  project: Record<string, any>
}

export const Project: NextPage<IProjectProps> = ({ project }) => (
  <>
    <SEO title={`${project?.title} | ${siteConfig.name}`} />

    <Page>
      <Section className="flex-1 max-w-2xl">
        <SectionAbout backLink="/portfolio" showBackLink={true} />
        <SectionProject project={project} />
        <Footer />
      </Section>
    </Page>
  </>
)
