import 'styles/index.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import { SEODefault } from '@/components/_partials'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <SEODefault />

      <NextNprogress
        color="var(--theme-highlight-color)"
        height={2}
        options={{ showSpinner: false }}
        showOnShallow={false}
        startPosition={0.1}
        stopDelayMs={200}
      />

      <Component {...pageProps} />
    </>
  )
}
