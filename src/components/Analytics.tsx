import Script from 'next/script'

export const Analytics = () => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TAG_MANAGER}`}
    />
    <Script
      id="ga-tracking"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_TAG_MANAGER}', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
  </>
)
