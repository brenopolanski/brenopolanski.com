import { DefaultSeo } from 'next-seo'

import { siteConfig } from '@/siteConfig'

export const SEODefault = () => {
  const title = `${siteConfig.name} | ${siteConfig.description}`
  const description = siteConfig.description
  const url = siteConfig.homepage

  return (
    <DefaultSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        description,
        title,
        type: 'website',
        url,
      }}
      twitter={{
        cardType: 'summary_large_image',
        handle: '@brenopolanski',
        site: '@site',
      }}
    />
  )
}
