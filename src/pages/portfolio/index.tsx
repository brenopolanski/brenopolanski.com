import { Footer, SectionPortfolio } from 'components';
import { Page, Section } from 'layouts';

export default function PortfolioPage() {
  return (
    <>
      <Page>
        <Section className="flex-1 max-w-2xl">
          <SectionPortfolio />
          <Footer />
        </Section>
      </Page>
    </>
  );
}
