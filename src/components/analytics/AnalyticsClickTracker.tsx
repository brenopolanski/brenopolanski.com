'use client'

import { useEffect } from 'react'

import type { AnalyticsData } from '@/lib/analytics'
import { trackEvent } from '@/lib/analytics'

const EVENT_DATASET_KEY = 'analyticsEvent'
const DATASET_PREFIX = 'analytics'

const toDataKey = (datasetKey: string) => {
  const suffix = datasetKey.slice(DATASET_PREFIX.length)
  return suffix.charAt(0).toLowerCase() + suffix.slice(1)
}

export const AnalyticsClickTracker = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const el = target?.closest<HTMLElement>('[data-analytics-event]')

      if (!el) {
        return
      }

      const name = el.dataset[EVENT_DATASET_KEY]

      if (!name) {
        return
      }

      const data: AnalyticsData = {}

      for (const [key, value] of Object.entries(el.dataset)) {
        if (key === EVENT_DATASET_KEY || !key.startsWith(DATASET_PREFIX) || value === undefined) {
          continue
        }

        data[toDataKey(key)] = value
      }

      trackEvent(name, Object.keys(data).length > 0 ? data : undefined)
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}
