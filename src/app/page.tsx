import { ThemeToggle } from '@/components/ThemeToggle'
import Link from 'next/link'
import {
  Mail,
  Twitter,
  Linkedin,
  Github,
  FileText,
  Globe,
  TrendingUp,
  Hash,
  Link as LinkIcon,
  Search,
  Gauge,
  Coffee,
} from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="mx-auto w-full max-w-3xl">
        {/* Header with theme toggle */}
        <div className="absolute right-4 top-4">
          <ThemeToggle />
        </div>

        {/* Main content */}
        <main className="space-y-8">
          {/* Header section */}
          <div className="text-center">
            <h1 className="mb-2 text-4xl font-bold">breno polanski</h1>
            <p className="text-muted-foreground text-sm">
              tldr: software engineer. open source enthusiast. always learning. usually from my mistakes.
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
                type="email"
                placeholder="type your email and hit enter to join"
                className="flex-1 rounded-l-md border-0 p-2 text-black outline-none"
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
                href="https://twitter.com/brenopolanski"
                className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
              >
                <Twitter className="mr-3 h-5 w-5" />
                <div className="flex-1">
                  <p className="font-bold">follow @brenopolanski</p>
                  <p className="text-muted-foreground text-sm">this is where i&apos;m most active</p>
                </div>
              </Link>

              <Link
                href="https://github.com/brenopolanski"
                className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
              >
                <Github className="mr-3 h-5 w-5" />
                <div className="flex-1">
                  <p className="font-bold">check my github</p>
                  <p className="text-muted-foreground text-sm">see my open source projects</p>
                </div>
              </Link>

              <Link
                href="https://linkedin.com/in/brenopolanski"
                className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
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
                href="#"
                className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
              >
                <FileText className="mr-3 h-5 w-5" />
                <div className="flex-1">
                  <p className="font-bold">tech blog</p>
                  <p className="text-muted-foreground text-sm">articles about web development</p>
                </div>
              </Link>

              <Link
                href="#"
                className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
              >
                <Globe className="mr-3 h-5 w-5" />
                <div className="flex-1">
                  <p className="font-bold">open source</p>
                  <p className="text-muted-foreground text-sm">my contributions to open source projects</p>
                </div>
              </Link>

              <Link
                href="#"
                className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
              >
                <TrendingUp className="mr-3 h-5 w-5" />
                <div className="flex-1">
                  <p className="font-bold">growth list</p>
                  <p className="text-muted-foreground text-sm">proven growth tactics for developers</p>
                </div>
              </Link>

              <Link
                href="#"
                className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
              >
                <Hash className="mr-3 h-5 w-5" />
                <div className="flex-1">
                  <p className="font-bold">typemat</p>
                  <p className="text-muted-foreground text-sm">free web development tool</p>
                </div>
              </Link>

              <Link
                href="#"
                className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
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
                href="#"
                className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
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
                href="#"
                className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
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
                href="#"
                className="border-border hover:bg-muted flex items-center rounded-lg border p-4 transition-colors"
              >
                <Coffee className="mr-3 h-5 w-5" />
                <div className="flex-1">
                  <p className="font-bold">buy me a coffee</p>
                  <p className="text-muted-foreground text-sm">support my open source work</p>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
