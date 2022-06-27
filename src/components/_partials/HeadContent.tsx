import { siteConfig } from '@/siteConfig'

export const HeadContent = () => (
  <>
    {/* Meta */}
    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />

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
      site.webmanifest provides metadata used when your web app is added to the
      homescreen on Android. See https://web.dev/add-manifest/
    */}
    <link rel="manifest" href="/static/favicons/site.webmanifest" />
  </>
)
