import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { AppHero } from '@/components/apps/AppHero'
import { FaqAccordion } from '@/components/apps/FaqAccordion'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { ArrowLeftIcon } from '@/components/shared/Icons'
import { LinkButton } from '@/components/shared/LinkButton'
import { paths } from '@/config/paths'
import { siteConfig } from '@/config/site'
import { ANALYTICS_EVENTS } from '@/lib/analytics'
import { getApp, getAppSlugs } from '@/lib/apps'
import { renderAppMarkdown } from '@/lib/markdown'

interface AppPageProps {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = async () => {
  const slugs = await getAppSlugs()
  return slugs.map((slug) => ({ slug }))
}

export const generateMetadata = async ({ params }: AppPageProps): Promise<Metadata> => {
  const { slug } = await params
  const app = await getApp(slug)

  if (!app) {
    return {}
  }

  const url = `/apps/${app.slug}`
  const title = app.metaTitle ?? app.title
  const socialTitle = `${title} · ${siteConfig.name}`
  const description = app.metaDescription ?? app.subtitle
  const image = app.ogImageUrl
    ? {
        url: app.ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${app.title} screenshot editor on macOS`,
        type: 'image/jpeg',
      }
    : {
        url: app.bannerUrl,
        alt: `${app.title} screenshot`,
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

const AppPage = async ({ params }: AppPageProps) => {
  const { slug } = await params
  const app = await getApp(slug)

  if (!app) {
    notFound()
  }

  const { html, faq } = await renderAppMarkdown(app.content)

  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-4 text-foreground md:p-8">
      <div className="mx-auto flex w-full flex-1 flex-col">
        <Header />

        <main className="flex flex-1 flex-col items-center md:pt-8">
          <article className="w-full max-w-2xl space-y-10">
            <AppHero app={app} />

            <Image
              alt={`${app.title} screenshot`}
              className="w-full"
              height={1440}
              loading="eager"
              quality={95}
              sizes="(min-width: 768px) 42rem, 100vw"
              src={app.bannerUrl}
              width={1920}
            />

            <div className="prose max-w-none prose-zinc dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: html }} />
              {faq.length > 0 && <FaqAccordion app={app.slug} items={faq} />}
            </div>
          </article>

          <LinkButton
            className="mt-12 max-w-xs"
            data-analytics-app={app.slug}
            data-analytics-event={ANALYTICS_EVENTS.appLinkClick}
            data-analytics-link="Back to home"
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

export default AppPage
