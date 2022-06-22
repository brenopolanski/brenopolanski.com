import 'styles/index.css'
import 'nprogress/nprogress.css'

import { appConfig } from 'appConfig'
import { AppProps } from 'next/app'
import { Router } from 'next/dist/client/router'
import Head from 'next/head'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Meta */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Android */}
        <meta name="theme-color" content={appConfig.color} />

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

      <Component {...pageProps} />
    </>
  )
}
