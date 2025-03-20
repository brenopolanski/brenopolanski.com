import { Geist, Geist_Mono } from 'next/font/google'

import { cn } from './utils'

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const fontVariables = cn(fontSans.variable, fontMono.variable)
