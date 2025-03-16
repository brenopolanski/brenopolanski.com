import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';
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
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-3xl mx-auto">
        {/* Header with theme toggle */}
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        {/* Main content */}
        <main className="space-y-8">
          {/* Header section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">breno polanski</h1>
            <p className="text-sm text-muted-foreground">
              tldr: software engineer. open source enthusiast. always learning.
              usually from my mistakes.
            </p>
          </div>

          {/* Email signup section */}
          <div className="bg-[#00ff66] text-black p-6 rounded-lg">
            <h2 className="font-bold mb-2">join breno&apos;s list</h2>
            <p className="text-sm mb-4">
              sporadic emails where i talk about what i&apos;m working on
              (usually web development, open source and tech)
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="type your email and hit enter to join"
                className="flex-1 p-2 rounded-l-md border-0 outline-none text-black"
              />
              <button className="bg-black text-white p-2 rounded-r-md">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Social links section */}
          <div>
            <h3 className="text-center text-sm mb-4">socials</h3>
            <div className="space-y-2">
              <Link
                href="https://twitter.com/brenopolanski"
                className="flex items-center p-4 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <Twitter className="h-5 w-5 mr-3" />
                <div className="flex-1">
                  <p className="font-bold">follow @brenopolanski</p>
                  <p className="text-sm text-muted-foreground">
                    this is where i&apos;m most active
                  </p>
                </div>
              </Link>

              <Link
                href="https://github.com/brenopolanski"
                className="flex items-center p-4 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <Github className="h-5 w-5 mr-3" />
                <div className="flex-1">
                  <p className="font-bold">check my github</p>
                  <p className="text-sm text-muted-foreground">
                    see my open source projects
                  </p>
                </div>
              </Link>

              <Link
                href="https://linkedin.com/in/brenopolanski"
                className="flex items-center p-4 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-3" />
                <div className="flex-1">
                  <p className="font-bold">connect on linkedin</p>
                  <p className="text-sm text-muted-foreground">
                    i&apos;m not very active here
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Projects section */}
          <div>
            <h3 className="text-center text-sm mb-4">projects</h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="flex items-center p-4 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <FileText className="h-5 w-5 mr-3" />
                <div className="flex-1">
                  <p className="font-bold">tech blog</p>
                  <p className="text-sm text-muted-foreground">
                    articles about web development
                  </p>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center p-4 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <Globe className="h-5 w-5 mr-3" />
                <div className="flex-1">
                  <p className="font-bold">open source</p>
                  <p className="text-sm text-muted-foreground">
                    my contributions to open source projects
                  </p>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center p-4 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <TrendingUp className="h-5 w-5 mr-3" />
                <div className="flex-1">
                  <p className="font-bold">growth list</p>
                  <p className="text-sm text-muted-foreground">
                    proven growth tactics for developers
                  </p>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center p-4 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <Hash className="h-5 w-5 mr-3" />
                <div className="flex-1">
                  <p className="font-bold">typemat</p>
                  <p className="text-sm text-muted-foreground">
                    free web development tool
                  </p>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center p-4 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <LinkIcon className="h-5 w-5 mr-3" />
                <div className="flex-1">
                  <p className="font-bold">linkypost</p>
                  <p className="text-sm text-muted-foreground">
                    a linkedin post generator that doesn&apos;t suck
                  </p>
                  <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded mt-1 dark:bg-gray-700 dark:text-gray-300">
                    acquired
                  </span>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center p-4 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <Search className="h-5 w-5 mr-3" />
                <div className="flex-1">
                  <p className="font-bold">keyword metrics</p>
                  <p className="text-sm text-muted-foreground">
                    content audit tool for better seo
                  </p>
                  <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded mt-1 dark:bg-gray-700 dark:text-gray-300">
                    acquired
                  </span>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center p-4 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <Gauge className="h-5 w-5 mr-3" />
                <div className="flex-1">
                  <p className="font-bold">url monitor</p>
                  <p className="text-sm text-muted-foreground">
                    get pages indexed in google
                  </p>
                  <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded mt-1 dark:bg-gray-700 dark:text-gray-300">
                    acquired
                  </span>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center p-4 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <Coffee className="h-5 w-5 mr-3" />
                <div className="flex-1">
                  <p className="font-bold">buy me a coffee</p>
                  <p className="text-sm text-muted-foreground">
                    support my open source work
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
