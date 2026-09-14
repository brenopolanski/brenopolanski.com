import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { AppHero } from '@/components/apps/AppHero'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { ArrowLeftIcon } from '@/components/shared/Icons'
import { LinkButton } from '@/components/shared/LinkButton'
import { paths } from '@/config/paths'
import { getApp, getAppSlugs } from '@/lib/apps'
import { renderMarkdown } from '@/lib/markdown'

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

  return {
    title: app.title,
    description: app.subtitle,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: app.title,
      description: app.subtitle,
      images: [{ url: app.bannerUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title: app.title,
      description: app.subtitle,
      images: [app.bannerUrl],
    },
  }
}

const AppPage = async ({ params }: AppPageProps) => {
  const { slug } = await params
  const app = await getApp(slug)

  if (!app) {
    notFound()
  }

  const html = await renderMarkdown(app.content)

  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-4 text-foreground md:p-8">
      <div className="mx-auto flex w-full flex-1 flex-col">
        <Header />

        <main className="flex flex-1 flex-col items-center md:pt-8">
          <article className="w-full max-w-2xl space-y-10">
            <AppHero app={app} />

            <Image
              alt={`${app.title} screenshot`}
              className="w-full rounded-xl border border-border"
              height={1440}
              quality={95}
              sizes="(min-width: 768px) 42rem, 100vw"
              src={app.bannerUrl}
              width={1920}
            />

            {/* Content is authored in this repo, not user input. */}
            <div
              className="prose max-w-none prose-zinc dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>

          <LinkButton
            className="mt-12 max-w-xs"
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
