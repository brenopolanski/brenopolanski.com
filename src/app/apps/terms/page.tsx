import type { Metadata } from 'next'
import Link from 'next/link'

import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { ArrowLeftIcon } from '@/components/shared/Icons'
import { LinkButton } from '@/components/shared/LinkButton'
import { paths } from '@/config/paths'
import { siteConfig } from '@/config/site'

const title = 'Terms of Use'
const description = 'Terms of use for my apps.'
const contactHref = `mailto:${siteConfig.author.emails.personal}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: paths.appsTerms },
  openGraph: {
    type: 'website',
    url: paths.appsTerms,
    title,
    description,
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
}

const TermsPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-4 text-foreground md:p-8">
      <div className="mx-auto flex w-full flex-1 flex-col">
        <Header />

        <main className="flex flex-1 flex-col items-center md:pt-8">
          <article className="prose w-full max-w-2xl prose-zinc dark:prose-invert">
            <p>
              <Link href={paths.home}>← Back to home</Link>
            </p>

            <h1>Apps — Terms of Use</h1>

            <p>
              Please take a moment to familiarize yourself with the following guidelines. They are
              designed to ensure a beneficial experience for us both.
            </p>

            <h2>General</h2>
            <p>
              By using my apps, you agree to these terms and any subsequent changes. I may update
              them without direct notice. Always check the latest terms here.
            </p>

            <h2>Permitted Use</h2>
            <p>
              You may use my apps without restrictions for their intended purposes. However,
              malicious usage is strictly prohibited.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content, features, and functionality of the apps are owned by me and protected by
              intellectual property laws. You may not reproduce, modify, distribute, or exploit any
              part of the apps without explicit permission.
            </p>

            <h2>App Store</h2>
            <p>
              If you get my apps from the App Store,{' '}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Apple’s EULA
              </a>{' '}
              applies.
            </p>

            <h2>Software Integrity</h2>
            <p>
              Perfection is the goal, but occasional bugs may appear. I deeply value the trust you
              place in my apps, yet I cannot promise complete flawlessness. For your peace of mind,
              regular backups are highly recommended.
            </p>

            <h2>Accessibility (ADA Compliance)</h2>
            <p>
              I am committed to making my apps accessible to everyone, including individuals with
              disabilities. If you encounter any accessibility issues while using my website or
              apps, please <a href={contactHref}>contact me</a> to report them, and I will do my
              best to address and resolve the concerns promptly. Accessibility improvements are
              continuously being made to ensure a user-friendly experience for all.
            </p>

            <h2>Liability</h2>
            <p>
              I disclaim all liability arising from the use or misuse of my apps. Users assume all
              risks and consequences tied to their actions based on the apps&apos; functionality or
              content.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify me against any claims, liabilities, damages, or expenses
              arising from your use of the apps or breach of these terms.
            </p>

            <h2>Refunds</h2>
            <p>
              For apps purchased on the Apple App Store, you can{' '}
              <a
                href="https://support.apple.com/en-us/HT204084"
                rel="noopener noreferrer"
                target="_blank"
              >
                request a refund
              </a>
              . However, I would appreciate if you <a href={contactHref}>reached out</a> first. I
              may be able to resolve any problems you are having.
            </p>

            <h2>Support</h2>
            <p>
              I aim to address all support and related queries within a week. There might be
              occasional delays, and I appreciate your understanding.
            </p>

            <hr />
            <p>Last Update: 2026-09-23</p>
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

export default TermsPage
