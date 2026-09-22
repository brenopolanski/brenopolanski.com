import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { ArrowLeftIcon } from '@/components/shared/Icons'
import { LinkButton } from '@/components/shared/LinkButton'
import { siteConfig } from '@/config/site'
import { getApp, getAppSlugs } from '@/lib/apps'

interface PrivacyPolicyPageProps {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = async () => {
  const slugs = await getAppSlugs()
  return slugs.map((slug) => ({ slug }))
}

export const generateMetadata = async ({ params }: PrivacyPolicyPageProps): Promise<Metadata> => {
  const { slug } = await params
  const app = await getApp(slug)

  if (!app) {
    return {}
  }

  const title = `Privacy Policy for ${app.title}`
  const description = `Privacy policy for ${app.title}.`
  const url = `/apps/${app.slug}/privacy-policy`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  }
}

const PrivacyPolicyPage = async ({ params }: PrivacyPolicyPageProps) => {
  const { slug } = await params
  const app = await getApp(slug)

  if (!app) {
    notFound()
  }

  const appHref = `/apps/${app.slug}`

  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-4 text-foreground md:p-8">
      <div className="mx-auto flex w-full flex-1 flex-col">
        <Header />

        <main className="flex flex-1 flex-col items-center md:pt-8">
          <article className="prose w-full max-w-2xl prose-zinc dark:prose-invert">
            <p>
              <Link href={appHref}>← Back to {app.title}</Link>
            </p>

            <h1>Privacy Policy for {app.title}</h1>

            <p>
              {app.title} does not collect, store, or send personal information. There is no account
              and no telemetry.
            </p>

            <p>
              Images stay on your Mac. Background removal runs a local model, so that image never
              leaves the machine.
            </p>

            <p>
              The first launch loads the editor engine from <code>cdn.unlayer.com</code>. After
              that, saving, screenshots, and the clipboard stay local.
            </p>

            <p>
              If you have any questions or suggestions regarding this privacy policy, do not
              hesitate to <a href={`mailto:${siteConfig.author.emails.personal}`}>contact me</a>.
            </p>
          </article>

          <LinkButton
            className="mt-12 max-w-xs"
            href={appHref}
            icon={<ArrowLeftIcon className="size-5 shrink-0" />}
            title={`Back to ${app.title}`}
          />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default PrivacyPolicyPage
