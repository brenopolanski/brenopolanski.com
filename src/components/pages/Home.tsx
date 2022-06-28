import {
  Footer,
  SectionAbout,
  SectionExperience,
  SectionFindMe,
  SectionProjects,
  SectionPublications,
} from '@/components/common'
import { Page, Section } from '@/components/layouts'

export const Home = () => (
  <Page>
    <Section className="flex-1 max-w-2xl">
      <SectionAbout />
      <SectionProjects />
      <SectionExperience />
      <SectionPublications />
      <SectionFindMe />
      <Footer />
    </Section>
  </Page>
)
