import { Footer, SectionAbout, SectionProject } from 'components'
import { siteData } from 'data'
import { Page, Section } from 'layouts'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { siteConfig } from 'siteConfig'

interface IProjectPageProps {
  project: Record<string, any>
}

export default function ProjectPage({ project }: IProjectPageProps) {
  return (
    <>
      <Head>
        <title>{`${project?.title} | ${siteConfig.name}`}</title>
        <meta name="description" content={project?.description} />
        <link rel="canonical" href={`${siteConfig.homepage}/portfolio/${project?.slug}`} />
      </Head>

      <Page>
        <Section className="flex-1 max-w-2xl">
          <SectionAbout backLink="/portfolio" showBackLink={true} />
          <SectionProject project={project} />
          <Footer />
        </Section>
      </Page>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = siteData.portfolio.filter((project) => project.isVisible).map((project) => `/portfolio/${project.slug}`)

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const projectId = context.params?.project

  return {
    props: {
      project: siteData.portfolio.find((project) => project.slug === projectId),
    },
  }
}
