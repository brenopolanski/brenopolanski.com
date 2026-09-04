import type { Metadata } from 'next'

import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { ArrowLeftIcon, FileTextIcon } from '@/components/shared/Icons'
import { LinkButton } from '@/components/shared/LinkButton'
import { paths } from '@/config/paths'

export const metadata: Metadata = {
  title: 'Page not found',
}

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-4 text-foreground md:p-8">
      <div className="mx-auto flex w-full flex-1 flex-col">
        <Header />

        <main className="flex flex-1 flex-col items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
            <h1 className="font-pixel text-7xl text-muted-foreground/60 md:text-8xl">404</h1>

            <div className="space-y-2">
              <h2 className="text-3xl font-bold uppercase">Not Found</h2>
              <p className="text-base text-muted-foreground">
                The page you are looking for does not exist or may have been moved.
              </p>
            </div>

            <div className="grid w-full grid-cols-2 gap-4">
              <LinkButton
                href={paths.home}
                icon={<ArrowLeftIcon className="size-5 shrink-0" />}
                title="Back to home"
              />
              <LinkButton
                href={paths.resume}
                icon={<FileTextIcon className="size-5 shrink-0" />}
                title="Resume"
                isExternal
              />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default NotFound
