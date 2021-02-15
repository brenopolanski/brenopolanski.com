import { appConfig } from 'appConfig';
import { ExternalLink, Heading } from 'components';

export const SectionFindMe = () => (
  <div className="mt-16">
    <Heading title="Find Me" />
    <ul className="ml-4 space-y-2 list-disc">
      <li>
        <ExternalLink className="text-lg" href={`/${appConfig.resume}`}>
          Resume
        </ExternalLink>
      </li>
      <li>
        <ExternalLink className="text-lg" href={appConfig.social.github}>
          GitHub
        </ExternalLink>
      </li>
      <li>
        <ExternalLink className="text-lg" href={appConfig.social.linkedin}>
          LinkedIn
        </ExternalLink>
      </li>
      <li>
        <ExternalLink className="text-lg" href={appConfig.social.twitter}>
          Twitter
        </ExternalLink>
      </li>
      <li>
        <ExternalLink className="text-lg" href={appConfig.email}>
          Email
        </ExternalLink>
      </li>
    </ul>
  </div>
);
