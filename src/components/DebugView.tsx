'use client'

import { useEffect, useState } from 'react'

import { isProd } from '@/config/env'

export const DebugView = () => {
  const [showDebug, setShowDebug] = useState(!isProd)
  const [cssDebugActive, setCssDebugActive] = useState(false)

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.target instanceof HTMLElement && event.target.isContentEditable) ||
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return
      }

      if (event.shiftKey && (event.key === 'D' || event.key === 'd')) {
        event.preventDefault()
        setShowDebug((showDebug) => !showDebug)
      }

      if (event.shiftKey && (event.key === 'O' || event.key === 'o')) {
        if (showDebug) {
          event.preventDefault()
          toggleCssDebug()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [showDebug])

  // CSS Debug toggle function
  const toggleCssDebug = () => {
    const headElement = document.head
    const debugElement = headElement.querySelector('[debug-css]')

    if (debugElement) {
      debugElement.remove()
      setCssDebugActive(false)
    } else {
      const styleElement = document.createElement('style')
      styleElement.setAttribute('debug-css', '')
      styleElement.innerText = '* { outline: 1px solid tomato; }'
      headElement.append(styleElement)
      setCssDebugActive(true)
    }
  }

  if (!showDebug) {
    return null
  }

  return (
    <div className="border-primary fixed bottom-0 left-0 z-[2147483647] flex flex-col gap-1 border-r border-t bg-black/90 px-2 py-1 font-mono text-[12px] text-white">
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <div className="block sm:hidden">screen: xs</div>
          <div className="hidden sm:block md:hidden">screen: sm</div>
          <div className="hidden md:block lg:hidden">screen: md</div>
          <div className="hidden lg:block xl:hidden">screen: lg</div>
          <div className="hidden xl:block 2xl:hidden">screen: xl</div>
          <div className="hidden 2xl:block">screen: 2xl</div>
        </div>
        <div className="border-l border-white/20 pl-1">env: {isProd ? 'prod' : 'dev'}</div>
      </div>

      <div className="flex gap-2 border-t border-white/20 pt-1">
        <button
          className={`w-full cursor-pointer rounded px-2 py-0.5 text-xs transition-colors ${
            cssDebugActive ? 'bg-tomato/80 text-white' : 'bg-white/10 text-white/80 hover:bg-white/20'
          }`}
          onClick={toggleCssDebug}
        >
          {cssDebugActive ? 'Disable CSS Debug' : 'Enable CSS Debug'}
        </button>
      </div>
    </div>
  )
}
