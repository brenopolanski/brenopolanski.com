'use client'

import { useTheme } from 'next-themes'
import { useCallback } from 'react'

import { BrightnessIcon } from '@/components/shared/Icons'
import { Button } from '@/components/ui/button'
import { ANALYTICS_EVENTS } from '@/lib/analytics'

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const switchTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, setTheme])

  // Ref: https://github.com/rudrodip/theme-toggle-effect
  const toggleTheme = useCallback(() => {
    if (!document.startViewTransition) {
      switchTheme()
      return
    }

    document.startViewTransition(switchTheme)
  }, [switchTheme])

  return (
    <Button
      className="cursor-pointer"
      data-analytics-event={ANALYTICS_EVENTS.themeToggle}
      data-analytics-source="button"
      size="icon"
      onClick={toggleTheme}
    >
      <BrightnessIcon className="size-5" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
