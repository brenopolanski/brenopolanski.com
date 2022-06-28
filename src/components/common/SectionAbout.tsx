import { siteConfig } from '@/siteConfig'

import { Content } from './Content'
import { Link } from './Link'
import { Title } from './Title'

interface ISectionAboutProps {
  backLink?: string
  showBackLink?: boolean
}

export const SectionAbout = ({ backLink = '/', showBackLink = false }: ISectionAboutProps) => (
  <header>
    <Link href="/">
      <Title title="Hey, I'm Breno Polanski 👋" />
    </Link>

    <Content>
      Front End Engineer based in Brazil. Mainly focused on web development and helping other people by giving
      presentations, writing articles and creating{' '}
      <Link href={siteConfig.social.github} isExternal>
        open source projects
      </Link>
      . Skills in Node.js, JavaScript/TypeScript (React ecosystem, Vue.js and Angular), HTML5, CSS and Responsive
      interfaces.
    </Content>

    <Content>
      As a programmer, I&apos;m in a constant search for better practices and also experimenting new things.
    </Content>

    <Content>
      I&apos;m an active open source contributor:{' '}
      <Link href={siteConfig.social.github} isExternal>
        {siteConfig.social.github}
      </Link>
    </Content>

    <div className="mt-5">
      {!showBackLink ? (
        <Link className="text-xl font-semibold" href="/portfolio">
          My Portfolio →
        </Link>
      ) : (
        <Link className="text-xl font-semibold" href={backLink}>
          ← Back
        </Link>
      )}
    </div>
  </header>
)
