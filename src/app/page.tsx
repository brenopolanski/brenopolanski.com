'use client'

import { FileText, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

import { BitcoinIcon, CircleDollarSignIcon, WorkflowIcon, XTwitterIcon } from '@/components/Icons'
import { Header } from '@/components/sections/header/Header'
import { Hero } from '@/components/sections/main/Hero'
import { Newsletter } from '@/components/sections/main/Newsletter'
import { DolarHojeLogo, PhootoAiLogo } from '@/components/sections/projects/Logos'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="mx-auto w-full">
        <Header />

        <main className="flex min-h-screen flex-col items-center justify-center">
          <div className="w-full max-w-md space-y-4">
            <Hero />
            <Newsletter />

            {/* Links section */}
            <div>
              <div className="my-6 flex items-center justify-center gap-4">
                <div className="bg-muted-foreground/20 h-px w-full" />
                <span className="text-muted-foreground text-center text-xs font-medium">links</span>
                <div className="bg-muted-foreground/20 h-px w-full" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  className="flex h-auto w-full cursor-pointer flex-col items-center gap-2 bg-zinc-50 py-4 shadow-none"
                  variant="outline"
                  asChild
                >
                  <Link href="https://twitter.com/brenopolanski" rel="noopener noreferrer" target="_blank">
                    <XTwitterIcon className="size-4 shrink-0" />
                    <span className="text-sm">X (Twitter)</span>
                  </Link>
                </Button>

                <Button
                  className="flex h-auto w-full cursor-pointer flex-col items-center gap-2 bg-zinc-50 py-4 shadow-none"
                  variant="outline"
                  asChild
                >
                  <Link href="https://github.com/brenopolanski" rel="noopener noreferrer" target="_blank">
                    <Github className="size-5 shrink-0" />
                    <span className="text-sm">GitHub</span>
                  </Link>
                </Button>

                <Button
                  className="flex h-auto w-full cursor-pointer flex-col items-center gap-2 bg-zinc-50 py-4 shadow-none"
                  variant="outline"
                  asChild
                >
                  <Link href="https://linkedin.com/in/brenopolanski" rel="noopener noreferrer" target="_blank">
                    <Linkedin className="size-5 shrink-0" />
                    <span className="text-sm">LinkedIn</span>
                  </Link>
                </Button>

                <Button
                  className="flex h-auto w-full cursor-pointer flex-col items-center gap-2 bg-zinc-50 py-4 shadow-none"
                  variant="outline"
                  asChild
                >
                  <Link href="/resume.pdf" target="_blank">
                    <FileText className="size-5 shrink-0" />
                    <span className="text-sm">Resume</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Projects section */}
            <div>
              <div className="my-6 flex items-center justify-center gap-4">
                <div className="bg-muted-foreground/20 h-px w-full" />
                <span className="text-muted-foreground text-center text-xs font-medium">projects</span>
                <div className="bg-muted-foreground/20 h-px w-full" />
              </div>
              <div className="space-y-4">
                <Link
                  className="hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 flex items-center rounded-lg border border bg-zinc-50 p-4 transition-colors"
                  href="https://phooto.ai"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <PhootoAiLogo className="mr-4 size-6 shrink-0" />
                  <div className="min-w-0 flex-grow">
                    <p className="font-bold">PHOOTO.AI</p>
                    <p className="text-muted-foreground truncate text-xs">Professional headshots with AI.</p>
                  </div>
                </Link>

                <Link
                  className="hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 flex items-center rounded-lg border border bg-zinc-50 p-4 transition-colors"
                  href="https://dolarhoje.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <DolarHojeLogo className="mr-4 size-6 shrink-0" />
                  <div className="min-w-0 flex-grow">
                    <p className="font-bold">Dólar Hoje</p>
                    <p className="text-muted-foreground truncate text-xs">
                      Track the price of the commercial dollar and tourism.
                    </p>
                  </div>
                </Link>

                <Link
                  className="hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 flex items-center rounded-lg border border bg-zinc-50 p-4 transition-colors"
                  href="https://bitcoinhoje.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <BitcoinIcon className="mr-4 size-6 shrink-0" />
                  <div className="min-w-0 flex-grow">
                    <p className="font-bold">Bitcoin Hoje</p>
                    <p className="text-muted-foreground truncate text-xs">
                      Track the price of Bitcoin and other cryptos.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Previous works section */}
            <div>
              <div className="my-6 flex items-center justify-center gap-4">
                <div className="bg-muted-foreground/20 h-px w-full" />
                <span className="text-muted-foreground text-center text-xs font-medium">prev&nbsp;works</span>
                <div className="bg-muted-foreground/20 h-px w-full" />
              </div>
              <div className="space-y-4">
                <Link
                  className="hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 flex items-center rounded-lg border border bg-zinc-50 p-4 transition-colors"
                  href="https://github.com/defidotmoney"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <CircleDollarSignIcon className="mr-4 size-6 shrink-0" />
                  <div className="min-w-0 flex-grow">
                    <p className="font-bold">defi.money</p>
                    <p className="text-muted-foreground truncate text-xs">Welcome to a new era of $MONEY.</p>
                  </div>
                </Link>

                <Link
                  className="hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 flex items-center rounded-lg border border bg-zinc-50 p-4 transition-colors"
                  href="https://github.com/llamafolio"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <CircleDollarSignIcon className="mr-4 size-6 shrink-0" />
                  <div className="min-w-0 flex-grow">
                    <p className="font-bold">LlamaFolio</p>
                    <p className="text-muted-foreground truncate text-xs">DeFi portfolio tracker.</p>
                  </div>
                </Link>

                <Link
                  className="hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 flex items-center rounded-lg border border bg-zinc-50 p-4 transition-colors"
                  href="https://github.com/llamanodes"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <WorkflowIcon className="mr-4 size-6 shrink-0" />
                  <div className="min-w-0 flex-grow">
                    <p className="font-bold">LlamaNodes</p>
                    <p className="text-muted-foreground truncate text-xs">
                      Fast and private RPC infra designed for Web3.
                    </p>
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
