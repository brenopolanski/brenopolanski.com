'use client'

import { useEffect, useState } from 'react'

import { isProd } from '@/config/env'

export const DebugView = () => {
  const [showDebug, setShowDebug] = useState(!isProd)

  // Pressing `shift + D` or `shift + d` will toggle the debug view
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.shiftKey && (event.key === 'D' || event.key === 'd')) {
        if (
          (event.target instanceof HTMLElement && event.target.isContentEditable) ||
          event.target instanceof HTMLInputElement ||
          event.target instanceof HTMLTextAreaElement ||
          event.target instanceof HTMLSelectElement
        ) {
          return
        }

        event.preventDefault()
        setShowDebug((showDebug) => !showDebug)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [showDebug])

  if (!showDebug) {
    return null
  }

  return (
    <div className="border-primary fixed bottom-0 left-0 z-[2147483647] flex items-center justify-center gap-1 border-r border-t bg-black px-1 py-0.5 font-sans text-[12px] text-white">
      <div className="block sm:hidden">screen: xs</div>
      <div className="hidden sm:block md:hidden">screen: sm</div>
      <div className="hidden md:block lg:hidden">screen: md</div>
      <div className="hidden lg:block xl:hidden">screen: lg</div>
      <div className="hidden xl:block 2xl:hidden">screen: xl</div>
      <div className="hidden 2xl:block">screen: 2xl</div>
      <div>-</div>
      <div>env: {isProd ? 'prod' : 'dev'}</div>
    </div>
  )
}
