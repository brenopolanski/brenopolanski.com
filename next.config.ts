import { withEnvStyles } from 'env.style'
import { createMDX } from 'fumadocs-mdx/next'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
  },
}

const withMDX = createMDX()

// `withEnvStyles` must stay outermost: in development it returns a function, and
// spreading that into `createMDX` would drop every option above. Awaiting the
// `withMDX` result lets Fumadocs finish generating its content index first.
export default withEnvStyles(async () => await withMDX(nextConfig), {
  color: {
    development: '#3b82f6',
    preview: '#f59e0b',
    staging: '#6b7280',
  },
})
