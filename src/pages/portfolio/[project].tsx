import { GetStaticPaths, GetStaticProps } from 'next'

import { Project } from '@/components/pages'
import { siteData } from '@/data'

export default Project

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = siteData.portfolio.filter((project) => project.isVisible).map((project) => `/portfolio/${project.id}`)

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const projectId = context.params?.project

  return {
    props: {
      project: siteData.portfolio.find((project) => project.id === projectId),
    },
  }
}
