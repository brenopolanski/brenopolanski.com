import '@/styles/globals.css'

import { Analytics } from '@vercel/analytics/next'

import { AnalyticsClickTracker } from '@/components/analytics/AnalyticsClickTracker'
import { fontVariables } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Providers } from '@/providers/Providers'

export { metadata } from './metadata'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      className={cn('theme-scaled font-mono antialiased', fontVariables)}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
        <Analytics />
        <AnalyticsClickTracker />
      </body>
    </html>
  )
}

export default RootLayout
