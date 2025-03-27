import '@/styles/globals.css'

import { DebugView } from '@/components/DebugView'
import { siteConfig } from '@/config/site'
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
    <html lang={siteConfig.meta.language} suppressHydrationWarning>
      <body className={cn('theme-scaled font-mono antialiased', fontVariables)}>
        <ThemeProvider
          attribute="class"
          defaultTheme={siteConfig.meta.theme.default}
          disableTransitionOnChange
          enableSystem
        >
          {children}
          <DebugView />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
