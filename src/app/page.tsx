'use client'

import {
  Coffee,
  FileText,
  Gauge,
  Github,
  Globe,
  Hash,
  Link as LinkIcon,
  Linkedin,
  Mail,
  Search,
  TrendingUp,
  Twitter,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { XIcon } from '@/components/Icons'
import { If } from '@/components/If'
import { MatrixText } from '@/components/MatrixText'
import { ThemeToggle } from '@/components/ThemeToggle'

const Home = () => {
  const [showFullImage, setShowFullImage] = useState(false)

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="mx-auto w-full">
        {/* Header with image & theme toggle */}
        <div className="mb-4 flex justify-between md:mb-0 md:block">
          <div className="md:fixed md:left-4 md:top-4 md:z-40">
            <button
              aria-label="View profile picture"
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => setShowFullImage(true)}
            >
              <Image
                alt="Breno Polanski profile picture"
                className="size-9 rounded-md"
                height={32}
                src="/breno-pfp.webp"
                width={32}
              />
            </button>
          </div>

          {/* Fullscreen Image Modal */}
          <If cond={showFullImage}>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6 md:p-8"
              onClick={() => setShowFullImage(false)}
            >
              <div className="relative aspect-square w-full max-w-[60vh]">
                <button
                  className="absolute -right-2 -top-2 z-[60] cursor-pointer rounded-full bg-white p-2 text-black transition-colors hover:bg-gray-100 sm:-right-4 sm:-top-4"
                  onClick={(event) => {
                    event.stopPropagation()
                    setShowFullImage(false)
                  }}
                >
                  <XIcon className="size-4 sm:size-5" />
                  <span className="sr-only">Close button</span>
                </button>
                <div className="relative size-full">
                  <Image
                    alt="Breno Polanski profile picture"
                    className="animate-scale-up rounded-lg object-contain shadow-2xl"
                    quality={95}
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 60vw, 50vw"
                    src="/breno-pfp.webp"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </If>

          <div className="md:fixed md:right-4 md:top-4 md:z-40">
            <ThemeToggle />
          </div>
        </div>

        {/* Main content */}
        <main className="flex min-h-screen flex-col items-center justify-center">
          <div className="w-full max-w-md space-y-4">
            {/* Header section */}
            <div className="text-center">
              <MatrixText text="Breno Polanski" textClassName="mb-2 text-3xl font-bold md:text-4xl" />
              <p className="text-muted-foreground text-base">
                Front End Engineer. Open Source enthusiast. Always learning. Usually from my mistakes.
              </p>
            </div>

            {/* Email signup section */}
            <div className="rounded-lg bg-[#00ff66] p-6 text-black">
              <h2 className="mb-2 font-bold">join breno&apos;s list</h2>
              <p className="mb-4 text-sm">
                sporadic emails where i talk about what i&apos;m working on (usually web development, open source and
                tech)
              </p>
              <div className="flex">
                <input
                  className="flex-1 rounded-l-md border-0 p-2 text-black outline-none"
                  placeholder="type your email and hit enter to join"
                  type="email"
                />
                <button className="rounded-r-md bg-black p-2 text-white">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Social links section */}
            <div>
              <h3 className="mb-4 text-center text-sm">socials</h3>
              <div className="space-y-2">
                <Link
                  className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
                  href="https://twitter.com/brenopolanski"
                >
                  <Twitter className="mr-3 h-5 w-5" />
                  <div className="flex-1">
                    <p className="font-bold">follow @brenopolanski</p>
                    <p className="text-muted-foreground text-sm">this is where i&apos;m most active</p>
                  </div>
                </Link>

                <Link
                  className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
                  href="https://github.com/brenopolanski"
                >
                  <Github className="mr-3 h-5 w-5" />
                  <div className="flex-1">
                    <p className="font-bold">check my github</p>
                    <p className="text-muted-foreground text-sm">see my open source projects</p>
                  </div>
                </Link>

                <Link
                  className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
                  href="https://linkedin.com/in/brenopolanski"
                >
                  <Linkedin className="mr-3 h-5 w-5" />
                  <div className="flex-1">
                    <p className="font-bold">connect on linkedin</p>
                    <p className="text-muted-foreground text-sm">i&apos;m not very active here</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Projects section */}
            <div>
              <h3 className="mb-4 text-center text-sm">projects</h3>
              <div className="space-y-2">
                <Link
                  className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
                  href="#"
                >
                  <FileText className="mr-3 h-5 w-5" />
                  <div className="flex-1">
                    <p className="font-bold">tech blog</p>
                    <p className="text-muted-foreground text-sm">articles about web development</p>
                  </div>
                </Link>

                <Link
                  className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
                  href="#"
                >
                  <Globe className="mr-3 h-5 w-5" />
                  <div className="flex-1">
                    <p className="font-bold">open source</p>
                    <p className="text-muted-foreground text-sm">my contributions to open source projects</p>
                  </div>
                </Link>

                <Link
                  className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
                  href="#"
                >
                  <TrendingUp className="mr-3 h-5 w-5" />
                  <div className="flex-1">
                    <p className="font-bold">growth list</p>
                    <p className="text-muted-foreground text-sm">proven growth tactics for developers</p>
                  </div>
                </Link>

                <Link
                  className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
                  href="#"
                >
                  <Hash className="mr-3 h-5 w-5" />
                  <div className="flex-1">
                    <p className="font-bold">typemat</p>
                    <p className="text-muted-foreground text-sm">free web development tool</p>
                  </div>
                </Link>

                <Link
                  className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
                  href="#"
                >
                  <LinkIcon className="mr-3 h-5 w-5" />
                  <div className="flex-1">
                    <p className="font-bold">linkypost</p>
                    <p className="text-muted-foreground text-sm">a linkedin post generator that doesn&apos;t suck</p>
                    <span className="mt-1 inline-block rounded bg-gray-200 px-2 py-1 text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      acquired
                    </span>
                  </div>
                </Link>

                <Link
                  className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
                  href="#"
                >
                  <Search className="mr-3 h-5 w-5" />
                  <div className="flex-1">
                    <p className="font-bold">keyword metrics</p>
                    <p className="text-muted-foreground text-sm">content audit tool for better seo</p>
                    <span className="mt-1 inline-block rounded bg-gray-200 px-2 py-1 text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      acquired
                    </span>
                  </div>
                </Link>

                <Link
                  className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
                  href="#"
                >
                  <Gauge className="mr-3 h-5 w-5" />
                  <div className="flex-1">
                    <p className="font-bold">url monitor</p>
                    <p className="text-muted-foreground text-sm">get pages indexed in google</p>
                    <span className="mt-1 inline-block rounded bg-gray-200 px-2 py-1 text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      acquired
                    </span>
                  </div>
                </Link>

                <Link
                  className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
                  href="#"
                >
                  <Coffee className="mr-3 h-5 w-5" />
                  <div className="flex-1">
                    <p className="font-bold">buy me a coffee</p>
                    <p className="text-muted-foreground text-sm">support my open source work</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
