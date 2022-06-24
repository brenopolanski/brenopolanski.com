import { Content, ExternalLink, RouterLink, Title } from 'components'
import Link from 'next/link'
import { siteConfig } from 'siteConfig'

interface ISectionAboutProps {
  backLink?: string
  showBackLink?: boolean
}

export const SectionAbout = ({ backLink = '/', showBackLink = false }: ISectionAboutProps) => (
  <header>
    <Link href="/">
      <a>
        <Title title="Hey, I'm Breno Polanski 👋" />
      </a>
    </Link>

    <Content>
      Front End Engineer based in Brazil. Mainly focused on web development and helping other people by giving
      presentations, writing articles and creating{' '}
      <ExternalLink href={siteConfig.social.github}>open source projects</ExternalLink>. Skills in Node.js,
      JavaScript/TypeScript (React ecosystem, Vue.js and Angular), HTML5, CSS and Responsive interfaces.
    </Content>

    <Content>
      As a programmer, I&apos;m in a constant search for better practices and also experimenting new things.
    </Content>

    <Content>
      I&apos;m an active open source contributor:{' '}
      <ExternalLink href={siteConfig.social.github}>{siteConfig.social.github}</ExternalLink>
    </Content>

    <div className="mt-5">
      {!showBackLink ? (
        <RouterLink className="text-xl font-semibold" href="/portfolio">
          My Portfolio →
        </RouterLink>
      ) : (
        <RouterLink className="text-xl font-semibold" href={backLink}>
          ← Back
        </RouterLink>
      )}
    </div>
  </header>
)
