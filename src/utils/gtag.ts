import { isClient, NEXT_PUBLIC_GA_TRACKING_ID } from 'utils'

declare global {
  interface Window {
    gtag: any
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (isClient) {
    window.gtag('config', NEXT_PUBLIC_GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

interface IEventParams {
  action: string
  category: string
  label: string
  value?: string
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const gaEvent = ({ action, category, label, value }: IEventParams) => {
  if (isClient) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}
