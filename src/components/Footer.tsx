'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

const Face = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Face</title>
      <path d="M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm-5 6v-2H7v2h2zm6 0v2H9v-2h6zm0 0h2v-2h-2v2z" />
    </svg>
  )
}

const Heart = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Heart</title>
      <path d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z" />
    </svg>
  )
}

const Flash = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Flash</title>
      <path d="M12 1h2v8h8v4h-2v-2h-8V5h-2V3h2V1zM8 7V5h2v2H8zM6 9V7h2v2H6zm-2 2V9h2v2H4zm10 8v2h-2v2h-2v-8H2v-4h2v2h8v6h2zm2-2v2h-2v-2h2zm2-2v2h-2v-2h2zm0 0h2v-2h-2v2z" />
    </svg>
  )
}

const ICONS = [Face, Heart, Flash]
const INTERVAL = 1_000

export const Footer = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % ICONS.length)
    }, INTERVAL)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const Icon = ICONS[currentIndex]

  if (!Icon) {
    return null
  }

  return (
    <footer className={cn('mt-10 flex items-center justify-center gap-2 md:mt-12', className)} {...props}>
      <span className="text-base">Made with</span>
      <div className="relative size-5 [&>svg]:absolute [&>svg]:inset-0 [&>svg]:size-full">
        <Icon />
      </div>
      <span className="text-base">by Breno Polanski</span>
    </footer>
  )
}
