import { siteConfig } from '@/config/site'

export interface JsonLdGraph {
  '@context': 'https://schema.org'
  '@graph': Record<string, unknown>[]
}

export const PERSON_ID = `${siteConfig.url}/#person`
export const WEBSITE_ID = `${siteConfig.url}/#website`

const getPersonSchema = (): Record<string, unknown> => ({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: siteConfig.author.name,
  url: siteConfig.url,
  email: siteConfig.author.emails.personal,
  jobTitle: 'Software Engineer',
  image: new URL('/breno-polanski.webp', siteConfig.url).href,
  sameAs: [siteConfig.links.x, siteConfig.links.github, siteConfig.links.linkedin],
})

const getWebSiteSchema = (): Record<string, unknown> => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: { '@id': PERSON_ID },
})

export const getSiteJsonLd = (): JsonLdGraph => ({
  '@context': 'https://schema.org',
  '@graph': [getPersonSchema(), getWebSiteSchema()],
})
