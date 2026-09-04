import type { Metadata } from 'next'
import Link from 'next/link'

import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { ArrowLeftIcon, FileTextIcon } from '@/components/shared/Icons'
import { Button } from '@/components/ui/button'
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
              <Button
                className="flex h-auto w-full cursor-pointer flex-col items-center gap-2 bg-zinc-50 py-4 shadow-none"
                variant="outline"
                asChild
              >
                <Link href={paths.home}>
                  <ArrowLeftIcon className="size-5 shrink-0" />
                  <span className="text-sm">Back to home</span>
                </Link>
              </Button>

              <Button
                className="flex h-auto w-full cursor-pointer flex-col items-center gap-2 bg-zinc-50 py-4 shadow-none"
                variant="outline"
                asChild
              >
                <Link
                  href={paths.resume}
                  prefetch={false}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FileTextIcon className="size-5 shrink-0" />
                  <span className="text-sm">Resume</span>
                </Link>
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default NotFound
