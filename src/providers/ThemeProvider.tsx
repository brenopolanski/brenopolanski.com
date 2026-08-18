'use client'

import type { ThemeProviderProps } from 'next-themes'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { useEffect } from 'react'

import { ANALYTICS_EVENTS, trackEvent } from '@/lib/analytics'

const isTypingTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === 'INPUT' ||
    target.tagName === 'TEXTAREA' ||
    target.tagName === 'SELECT'
  )
}

const ThemeHotkey = () => {
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.repeat) {
        return
      }

      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      if (event.key.toLowerCase() !== 'd') {
        return
      }

      if (isTypingTarget(event.target)) {
        return
      }

      const switchTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }

      trackEvent(ANALYTICS_EVENTS.themeToggle, { source: 'hotkey' })

      // Ref: https://github.com/rudrodip/theme-toggle-effect
      if (!document.startViewTransition) {
        switchTheme()
        return
      }

      document.startViewTransition(switchTheme)
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
      {...props}
    >
      <ThemeHotkey />
      {children}
    </NextThemesProvider>
  )
}
