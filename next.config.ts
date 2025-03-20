import CircularDependencyPlugin from 'circular-dependency-plugin'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
  webpack: (config, { dev, isServer }) => {
    // Add plugins in development mode
    if (dev && !isServer) {
      config.plugins.push(
        new CircularDependencyPlugin({
          allowAsyncCycles: false,
          cwd: process.cwd(),
          exclude: /node_modules/,
          failOnError: true,
          include: /src/,
        }),
      )
    }

    return config
  },
}

export default nextConfig
