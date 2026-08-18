import '@/styles/globals.css'

import { fontVariables } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/ThemeProvider'

export { metadata } from './metadata'

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('theme-scaled font-mono antialiased', fontVariables)}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
