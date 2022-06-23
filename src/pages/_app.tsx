import 'styles/index.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import { siteConfig } from 'siteConfig'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Meta */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Android */}
        <meta name="theme-color" content={siteConfig.color} />

        {/* Main Link Tags */}
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />

        {/* iOS */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />

        {/* Others */}
        <link rel="shortcut icon" href="/images/favicon.ico" />

        {/*
          manifest.json provides metadata used when your web app is added to the
          homescreen on Android. See https://developers.google.com/web/fundamentals/web-app-manifest/
        */}
        <link rel="manifest" href="/manifest.json" />
      </Head>

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
