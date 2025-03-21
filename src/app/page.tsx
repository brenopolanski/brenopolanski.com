'use client'

import { FileText, Github, Linkedin, Quote } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import {
  BitcoinIcon,
  CameraIcon,
  CircleDollarSignIcon,
  MailIcon,
  SendIcon,
  WorkflowIcon,
  XIcon,
  XTwitterIcon,
} from '@/components/Icons'
import { If } from '@/components/If'
import { MatrixText } from '@/components/MatrixText'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const Home = () => {
  const [showFullImage, setShowFullImage] = useState(false)
  const [showQuote, setShowQuote] = useState(false)
  const [quoteLanguage, setQuoteLanguage] = useState<'en' | 'pt-br'>('en')

  const quoteText = {
    en: `Tick-tock. Tick-tock.

Time is the most important asset. Time does not equal money. Time equals life. And you only have one chance to make it right. Every human being is fighting a battle inside themselves. It's your obligation to help and inspire them. Regardless of what you do, you can always inspire others to do good. Nobody is better than you. And you're not better than anybody else. Be humble. Being in the comfort zone is wonderful, but nothing ever grows there. Keep studying. Keep creating. Haters will come if you have the audacity to build something new. Don't let them define you. Don't let them stop you. Just block them and keep going. Don't expect others to make you happy. You are the only one responsible for your happiness. Don't wait until friday to enjoy life. Joy should be present in everything you do. Be kind to your parents. They gave up many things for you. Having hundreds of people admiring you is worthless, if you're not admired by your own family. Don't fear the unknown. Fear knowing everything. Life is too damn short and every day counts. Do what you wanna do and do it now. Tick-tock don't stop. Tick-tock don't wait.`,
    'pt-br': `Tique-taque. Tique-taque.

Tempo é o ativo mais importante. Tempo não é igual a dinheiro. Tempo é igual a vida. E você só tem uma chance de fazer direito. Todo ser humano está travando uma batalha interior. É sua obrigação ajudar e inspirar. Independentemente do que você faz, você sempre pode inspirar outros a fazer o bem. Ninguém é melhor que você. E você não é melhor que ninguém. Seja humilde. Estar na zona de conforto é maravilhoso, mas nada cresce lá. Continue estudando. Continue criando. Haters virão se você tiver a audácia de construir algo novo. Não deixe que eles te definam. Não deixe que eles te parem. Apenas bloqueie-os e siga em frente. Não espere que outros te façam feliz. Você é o único responsável pela sua felicidade. Não espere até sexta-feira para aproveitar a vida. A alegria deve estar presente em tudo que você faz. Seja gentil com seus pais. Eles abriram mão de muitas coisas por você. Ter centenas de pessoas te admirando não vale nada se você não é admirado pela sua própria família. Não tema o desconhecido. Tema saber tudo. A vida é muito curta e cada dia conta. Faça o que você quer fazer e faça agora. Tique-taque não para. Tique-taque não espera.`,
  }

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

          {/* Quote Modal */}
          <If cond={showQuote}>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6 md:p-8"
              onClick={() => setShowQuote(false)}
            >
              <button
                className="absolute right-2 top-2 z-[60] cursor-pointer rounded-full bg-white p-2 text-black transition-colors hover:bg-gray-100 sm:right-4 sm:top-4"
                onClick={(event) => {
                  event.stopPropagation()
                  setShowQuote(false)
                }}
              >
                <XIcon className="size-4 sm:size-5" />
                <span className="sr-only">Close quote</span>
              </button>

              <div className="relative w-full max-w-2xl rounded-lg bg-transparent p-4 text-white sm:p-6">
                <div className="mb-4 flex justify-center gap-2">
                  <button
                    className={`rounded px-3 py-1 text-sm transition-colors ${
                      quoteLanguage === 'en' ? 'bg-white text-black' : 'bg-transparent text-white/60 hover:text-white'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setQuoteLanguage('en')
                    }}
                  >
                    EN
                  </button>
                  <button
                    className={`rounded px-3 py-1 text-sm transition-colors ${
                      quoteLanguage === 'pt-br'
                        ? 'bg-white text-black'
                        : 'bg-transparent text-white/60 hover:text-white'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setQuoteLanguage('pt-br')
                    }}
                  >
                    PT-BR
                  </button>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <p className="max-h-[70vh] overflow-y-auto font-['Playfair_Display'] text-base leading-relaxed sm:text-lg md:text-xl">
                    {quoteText[quoteLanguage].split('\n\n').map((paragraph, index) => (
                      <span key={index}>
                        {paragraph}
                        {index < quoteText[quoteLanguage].split('\n\n').length - 1 && (
                          <>
                            <br />
                            <br />
                          </>
                        )}
                      </span>
                    ))}
                  </p>
                  <div className="space-y-2 text-right">
                    <p className="font-['Playfair_Display'] text-xs italic sm:text-sm">- by Zeno & Carol</p>
                    <Link
                      className="text-xs text-gray-400 transition-colors hover:text-white"
                      href="https://zenorocha.com/reminder"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Source: zenorocha.com/reminder
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </If>

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
              <div className="flex items-start justify-center gap-2">
                <MatrixText text="Breno Polanski" textClassName="mb-2 text-3xl font-bold md:text-4xl" />{' '}
                <Button
                  aria-label="View inspirational quote"
                  className="cursor-pointer rounded-full p-2 transition-transform hover:scale-110"
                  size="icon"
                  variant="secondary"
                  onClick={() => setShowQuote(true)}
                >
                  <Quote className="size-5" />
                </Button>
              </div>
              <p className="text-muted-foreground text-base">
                Indie hacker. Web3 Developer. Open source enthusiast. Always learning. Usually from my mistakes.
              </p>
            </div>

            {/* Email signup section */}
            <Card className="bg-gradient-to-br from-emerald-400 to-green-500 dark:from-emerald-500 dark:to-green-600">
              <CardContent className="px-8 py-4">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl font-bold text-black">Join breno&apos;s list</CardTitle>
                  <CardDescription className="text-black/80">
                    Sporadic emails where I talk about what i&apos;m working on (usually web3 development, open source
                    and SaaS).
                  </CardDescription>
                </CardHeader>
                <div className="mt-4 flex gap-2">
                  <div className="relative flex-1">
                    <MailIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-black/60" />
                    <Input
                      className="flex-1 border-0 !bg-white pl-10 text-black placeholder:text-black/60 focus-visible:ring-0"
                      placeholder="type your email to join..."
                      type="email"
                    />
                  </div>
                  <Button
                    className="cursor-pointer bg-white text-black transition-colors hover:bg-gray-100"
                    size="icon"
                    variant="secondary"
                  >
                    <SendIcon className="size-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

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
                  <CameraIcon className="mr-4 size-6 shrink-0" />
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
                  <CircleDollarSignIcon className="mr-4 size-6 shrink-0" />
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
