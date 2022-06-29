import { Footer } from '@/components/common'

import { Section } from './Section'

interface IPageProps {
  children: React.ReactNode
}

export const Page = ({ children }: IPageProps) => (
  <div className="flex flex-col min-h-screen bg-theme-background">
    <div className="flex flex-col flex-1">
      <Section className="flex-1 max-w-2xl">
        <main>{children}</main>
        <Footer />
      </Section>
    </div>
  </div>
)
