import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'

import { cn } from './utils'

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const fontPlayfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const fontVariables = cn(fontSans.variable, fontMono.variable, fontPlayfair)
