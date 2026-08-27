import { track } from '@vercel/analytics'

import { isDev } from '@/config/env'

import { isClient } from './utils'

export const ANALYTICS_EVENTS = {
  themeToggle: 'theme_toggle',
  profileOpen: 'profile_open',
  quoteOpen: 'quote_open',
  quoteLanguage: 'quote_language',
  quoteSourceClick: 'quote_source_click',
  newsletterSubscribe: 'newsletter_subscribe',
  socialClick: 'social_click',
  resumeClick: 'resume_click',
  portfolioClick: 'portfolio_click',
  projectClick: 'project_click',
  prevWorkClick: 'prev_work_click',
} as const

export type AnalyticsEventName = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS]

type AnalyticsValue = string | number | boolean | null
export type AnalyticsData = Record<string, AnalyticsValue>

export const trackEvent = (name: string, data?: AnalyticsData) => {
  if (isDev) {
    return
  }

  const page = isClient ? window.location.pathname : undefined

  track(name, { page, ...data })
}
