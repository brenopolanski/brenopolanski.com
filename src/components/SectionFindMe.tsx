import { ExternalLink, Heading } from '@/components'
import { siteConfig } from '@/siteConfig'

export const SectionFindMe = () => (
  <div className="mt-16">
    <Heading title="Find Me" />
    <ul className="ml-4 space-y-2 list-disc">
      <li>
        <ExternalLink className="text-lg" href={`/${siteConfig.resume}`}>
          Resume
        </ExternalLink>
      </li>
      <li>
        <ExternalLink className="text-lg" href={siteConfig.social.github}>
          GitHub
        </ExternalLink>
      </li>
      <li>
        <ExternalLink className="text-lg" href={siteConfig.social.linkedin}>
          LinkedIn
        </ExternalLink>
      </li>
      <li>
        <ExternalLink className="text-lg" href={siteConfig.social.twitter}>
          Twitter
        </ExternalLink>
      </li>
      <li>
        <ExternalLink className="text-lg" href={`mailto:${siteConfig.email}`}>
          Email
        </ExternalLink>
      </li>
    </ul>
  </div>
)
