import { Analytics } from 'components'
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { Children } from 'react'
import { siteConfig } from 'siteConfig'
import { ServerStyleSheet } from 'styled-components'
import { isDev } from 'utils'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [...Children.toArray(initialProps.styles), ...(sheet.getStyleElement() as React.ReactElement[])],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Meta */}
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Android */}
          <meta name="theme-color" content={siteConfig.color} />

          {/* Main Link Tags */}
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />

          {/* iOS */}
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />

          {/* Others */}
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" />

          {/*
            manifest.json provides metadata used when your web app is added to the
            homescreen on Android. See https://developers.google.com/web/fundamentals/web-app-manifest/
          */}
          <link rel="manifest" href="/static/favicons/manifest.json" />
        </Head>
        <body className={isDev ? 'debug-screens' : ''}>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    )
  }
}
