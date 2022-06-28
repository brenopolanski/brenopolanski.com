import { siteConfig } from '@/siteConfig'

import { Heading } from './Heading'
import { Link } from './Link'

export const SectionFindMe = () => (
  <div className="mt-16">
    <Heading title="Find Me" />
    <ul className="ml-4 space-y-2 list-disc">
      <li>
        <Link className="text-lg" href={`/${siteConfig.resume}`} isExternal>
          Resume
        </Link>
      </li>
      <li>
        <Link className="text-lg" href={siteConfig.social.github} isExternal>
          GitHub
        </Link>
      </li>
      <li>
        <Link className="text-lg" href={siteConfig.social.linkedin} isExternal>
          LinkedIn
        </Link>
      </li>
      <li>
        <Link className="text-lg" href={siteConfig.social.twitter} isExternal>
          Twitter
        </Link>
      </li>
      <li>
        <Link className="text-lg" href={`mailto:${siteConfig.email}`} isExternal>
          Email
        </Link>
      </li>
    </ul>
  </div>
)
