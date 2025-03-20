import CircularDependencyPlugin from 'circular-dependency-plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
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
