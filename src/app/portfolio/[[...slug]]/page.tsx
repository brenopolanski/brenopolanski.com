import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page'
import { createRelativeLink } from 'fumadocs-ui/mdx'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getMDXComponents } from '@/components/mdx'
import { ProjectGallery } from '@/components/portfolio/ProjectGallery'
import { ProjectLinks } from '@/components/portfolio/ProjectLinks'
import { ProjectMeta } from '@/components/portfolio/ProjectMeta'
import { ProjectStack } from '@/components/portfolio/ProjectStack'
import { source } from '@/lib/source'

const Page = async (props: PageProps<'/portfolio/[[...slug]]'>) => {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) {
    notFound()
  }

  const MDX = page.data.body

  return (
    <DocsPage full={page.data.full} toc={page.data.toc}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <ProjectMeta license={page.data.license} year={page.data.year} />
      <DocsBody>
        <ProjectGallery images={page.data.images} />
        <MDX components={getMDXComponents({ a: createRelativeLink(source, page) })} />
        <ProjectStack stack={page.data.stack} />
        <ProjectLinks links={page.data.links} />
      </DocsBody>
    </DocsPage>
  )
}

export const generateStaticParams = () => source.generateParams()

export const generateMetadata = async (
  props: PageProps<'/portfolio/[[...slug]]'>,
): Promise<Metadata> => {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) {
    notFound()
  }

  return {
    title: page.data.title,
    description: page.data.description,
  }
}

export default Page
