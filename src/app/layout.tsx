import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'

import { fontVariables } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/ThemeProvider'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Breno Polanski',
  description: 'Personal website of Breno Polanski',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html className={`${playfair.variable}`} lang="en" suppressHydrationWarning>
      <body className={cn('theme-scaled font-mono antialiased', fontVariables)}>
        <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
