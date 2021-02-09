import {
  Footer,
  SectionAbout,
  SectionExperiences,
  SectionFindMe,
  SectionProjects,
  SectionPublications,
} from 'components';
import { Page, Section } from 'layouts';

export default function HomePage() {
  return (
    <>
      <Page>
        <Section className="flex-1 max-w-2xl">
          <SectionAbout />
          <SectionProjects />
          <SectionExperiences />
          <SectionPublications />
          <SectionFindMe />
          <Footer />
        </Section>
      </Page>
    </>
  );
}
