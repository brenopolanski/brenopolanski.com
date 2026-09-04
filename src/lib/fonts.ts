import { GeistMono } from 'geist/font/mono'
import { GeistPixelSquare } from 'geist/font/pixel'
import { GeistSans } from 'geist/font/sans'
import { Playfair_Display } from 'next/font/google'

import { cn } from './utils'

const fontPlayfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const fontVariables = cn(
  GeistSans.variable,
  GeistMono.variable,
  GeistPixelSquare.variable,
  fontPlayfair.variable,
)
