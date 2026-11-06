import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { FaqAccordion } from '@/components/apps/FaqAccordion'
import { Footer } from '@/components/navigation/footer/Footer'
import { Header } from '@/components/navigation/header/Header'
import { ProjectHero } from '@/components/projects/ProjectHero'
import { ArrowLeftIcon } from '@/components/shared/Icons'
import { LinkButton } from '@/components/shared/link/LinkButton'
import { paths } from '@/config/paths'
import { siteConfig } from '@/config/site'
import { ANALYTICS_EVENTS } from '@/lib/analytics'
import { renderAppMarkdown } from '@/lib/markdown'
import { getProject, getProjectSlugs } from '@/lib/projects'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = async () => {
  const slugs = await getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export const generateMetadata = async ({ params }: ProjectPageProps): Promise<Metadata> => {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return {}
  }

  const url = `/projects/${project.slug}`
  const title = project.metaTitle ?? project.title
  const socialTitle = `${title} · ${siteConfig.name}`
  const description = project.metaDescription ?? project.subtitle
  const image = project.ogImageUrl
    ? {
        url: project.ogImageUrl,
        width: 1200,
        height: 630,
        alt: project.title,
        type: 'image/jpeg',
      }
    : {
        url: project.bannerUrl,
        alt: `${project.title} screenshot`,
      }

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: siteConfig.name,
      url,
      title: { absolute: socialTitle },
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.author.x,
      creator: siteConfig.author.x,
      title: { absolute: socialTitle },
      description,
      images: [image],
    },
  }
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const { html, faq } = await renderAppMarkdown(project.content)

  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-4 text-foreground md:p-8">
      <div className="mx-auto flex w-full flex-1 flex-col">
        <Header />

        <main className="flex flex-1 flex-col items-center md:pt-8">
          <article className="w-full max-w-2xl space-y-10">
            <ProjectHero project={project} />

            <Image
              alt={`${project.title} screenshot`}
              className="w-full"
              height={1280}
              loading="eager"
              quality={95}
              sizes="(min-width: 768px) 42rem, 100vw"
              src={project.bannerUrl}
              width={1920}
            />

            <div className="prose max-w-none prose-zinc dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: html }} />
              {faq.length > 0 && <FaqAccordion app={project.slug} items={faq} />}
            </div>
          </article>

          <LinkButton
            className="mt-12 max-w-xs"
            data-analytics-event={ANALYTICS_EVENTS.projectLinkClick}
            data-analytics-link="Back to home"
            data-analytics-project={project.slug}
            data-analytics-target={paths.home}
            href={paths.home}
            icon={<ArrowLeftIcon className="size-5 shrink-0" />}
            title="Back to home"
          />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default ProjectPage
