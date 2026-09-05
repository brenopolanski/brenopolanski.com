import { GeistPixelSquare } from 'geist/font/pixel'
import { GeistSans } from 'geist/font/sans'
import { Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'

import { cn } from './utils'

const GeistMono = localFont({
  src: '../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2',
  variable: '--font-geist-mono',
  adjustFontFallback: 'Arial',
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'Roboto Mono',
    'Menlo',
    'Monaco',
    'Liberation Mono',
    'DejaVu Sans Mono',
    'Courier New',
    'monospace',
  ],
  weight: '100 900',
})

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
