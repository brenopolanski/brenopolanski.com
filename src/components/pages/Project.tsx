import { NextPage } from 'next'

import { SEO } from '@/components/_partials'
import { SectionAbout, SectionProject } from '@/components/common'
import { siteConfig } from '@/siteConfig'

interface IProjectProps {
  project: Record<string, any>
}

export const Project: NextPage<IProjectProps> = ({ project }) => (
  <>
    <SEO title={`${project?.title} | ${siteConfig.name}`} />

    <SectionAbout backLink="/portfolio" showBackLink />
    <SectionProject project={project} />
  </>
)
