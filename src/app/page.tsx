import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { Links } from '@/components/sections/links/Links'
import { Hero } from '@/components/sections/main/Hero'
import { Newsletter } from '@/components/sections/main/Newsletter'
import { PrevWorks } from '@/components/sections/prevWorks/PrevWorks'
import { Projects } from '@/components/sections/projects/Projects'
import { SectionDivider } from '@/components/shared/SectionDivider'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-4 text-foreground md:p-8">
      <div className="mx-auto w-full">
        <Header />

        <main className="flex min-h-screen flex-col items-center justify-center">
          <div className="w-full max-w-md space-y-4">
            <Hero />
            <Newsletter />

            <div>
              <SectionDivider className="my-6" title="links" />
              <Links />
            </div>

            <SectionDivider className="my-6" title="projects" />
            <Projects />

            <SectionDivider className="my-6" title="prev&nbsp;works" />
            <PrevWorks />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Home
