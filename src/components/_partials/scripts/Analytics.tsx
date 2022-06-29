import Script from 'next/script'

import { NEXT_PUBLIC_GA_TRACKING_ID } from '@/utils'

export const Analytics = () => (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_TRACKING_ID}`}
      strategy="afterInteractive"
    />
    <Script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${NEXT_PUBLIC_GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
      }}
      id="ga-tracking"
      strategy="afterInteractive"
    />
  </>
)
