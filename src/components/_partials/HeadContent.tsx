import { siteConfig } from '@/siteConfig'

export const HeadContent = () => (
  <>
    {/* Meta */}
    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />

    {/* Android */}
    <meta content={siteConfig.color} name="theme-color" />

    {/* Main Link Tags */}
    <link href="/static/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
    <link href="/static/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />

    {/* iOS */}
    <link href="/static/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />

    {/* Others */}
    <link href="/static/favicons/favicon.ico" rel="shortcut icon" />

    {/*
      site.webmanifest provides metadata used when your web app is added to the
      homescreen on Android. See https://web.dev/add-manifest/
    */}
    <link href="/static/favicons/site.webmanifest" rel="manifest" />
  </>
)
