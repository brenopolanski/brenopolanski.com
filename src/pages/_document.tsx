import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { Children } from 'react'
import { ServerStyleSheet } from 'styled-components'

import { Analytics, HeadContent } from '@/components/_partials'
import { isDev } from '@/utils'

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
          <HeadContent />
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
