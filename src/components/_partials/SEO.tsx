import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { siteConfig } from '@/siteConfig'

interface ISEOProps {
  title: string
}

export const SEO = ({ title }: ISEOProps) => {
  const { asPath } = useRouter()

  const url = siteConfig.homepage + asPath

  return (
    <NextSeo
      canonical={url}
      openGraph={{
        title,
        url,
      }}
      title={title}
    />
  )
}
