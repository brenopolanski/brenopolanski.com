import 'styles/index.css'

import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress
        color="var(--theme-highlight-color)"
        height={2}
        options={{ showSpinner: false }}
        showOnShallow={false}
        startPosition={0.1}
        stopDelayMs={200}
      />

      <Component {...pageProps} />
    </>
  )
}
