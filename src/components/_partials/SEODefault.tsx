import { DefaultSeo } from 'next-seo'

import { siteConfig } from '@/siteConfig'

export const SEODefault = () => {
  const title = `${siteConfig.name} | ${siteConfig.description}`
  const description = siteConfig.description
  const url = siteConfig.homepage

  return (
    <DefaultSeo
      canonical={url}
      description={description}
      openGraph={{
        description,
        title,
        type: 'website',
        url,
      }}
      title={title}
      twitter={{
        cardType: 'summary_large_image',
        handle: '@brenopolanski',
        site: '@site',
      }}
    />
  )
}
