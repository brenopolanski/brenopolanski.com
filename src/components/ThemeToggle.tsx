'use client'

import { useTheme } from 'next-themes'
import { useCallback } from 'react'

import { Button } from '@/components/ui/button'

import { BrightnessIcon } from './Icons'

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const switchTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, setTheme])

  // Ref: https://github.com/rudrodip/theme-toggle-effect
  const toggleTheme = useCallback(() => {
    if (!document.startViewTransition) {
      switchTheme()
    }

    document.startViewTransition(switchTheme)
  }, [switchTheme])

  return (
    <Button className="cursor-pointer" size="icon" onClick={toggleTheme}>
      <BrightnessIcon className="size-5" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
