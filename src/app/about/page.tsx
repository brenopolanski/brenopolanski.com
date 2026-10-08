import type { Metadata } from 'next'

import Lanyard from '@/components/about/Lanyard'
import { Footer } from '@/components/navigation/footer/Footer'
import { Header } from '@/components/navigation/header/Header'
import { ArrowLeftIcon } from '@/components/shared/Icons'
import { LinkButton } from '@/components/shared/link/LinkButton'
import { paths } from '@/config/paths'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'About',
  description: siteConfig.description,
  alternates: { canonical: paths.about },
}

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-4 text-foreground md:p-8">
      <div className="mx-auto flex w-full flex-1 flex-col">
        <Header />

        <main className="flex flex-1 flex-col items-center md:pt-8">
          <div className="w-full max-w-md space-y-2 text-center">
            <h1 className="text-3xl font-bold uppercase md:text-4xl">{siteConfig.name}</h1>
            <p className="text-base text-balance text-muted-foreground">{siteConfig.description}</p>
          </div>

          <div className="h-[600px] w-full max-w-3xl">
            <Lanyard
              backImage="/about/dashfy-strap.png"
              frontImage="/breno-polanski.webp"
              strapImage="/about/dashfy-strap.png"
            />
          </div>

          <p className="mb-8 text-sm text-muted-foreground">
            Drag the badge. Click it to flip it over.
          </p>

          <LinkButton
            className="max-w-xs"
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

export default AboutPage
