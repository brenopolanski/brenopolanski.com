import '@/styles/globals.css'

import type { Metadata } from 'next'

import { fontVariables } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/ThemeProvider'

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
    <html lang="en" suppressHydrationWarning>
      <body className={cn('theme-scaled font-mono antialiased', fontVariables)}>
        <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
