import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { RootProvider } from 'fumadocs-ui/provider/next'

import { baseOptions } from '@/lib/layout.shared'
import { source } from '@/lib/source'

const PortfolioLayout = ({ children }: LayoutProps<'/portfolio'>) => {
  return (
    <RootProvider theme={{ enabled: false }}>
      <div className="flex min-h-screen flex-col">
        <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
          {children}
        </DocsLayout>
      </div>
    </RootProvider>
  )
}

export default PortfolioLayout
