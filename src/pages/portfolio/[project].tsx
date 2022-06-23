import { Footer, SectionAbout, SectionProject } from 'components'
import { data } from 'data'
import { Page, Section } from 'layouts'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import { siteConfig } from 'siteConfig'

type ProjectPageProps = {
  project: Record<string, any>
}

export default function ProjectPage({ project }: ProjectPageProps) {
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
  const paths = data.portfolio.filter((project) => project.isVisible).map((project) => `/portfolio/${project.slug}`)

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { project: projectId } = params as ParsedUrlQuery

  return {
    props: {
      project: data.portfolio.find((project) => project.slug === projectId),
    },
  }
}
