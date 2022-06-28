/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const withNextCircularDeps = require('next-circular-dependency')

const isDev = process.env.NODE_ENV === 'development'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {}

module.exports = withPlugins(
  [
    [
      withNextCircularDeps,
      {
        exclude: /a\.js|node_modules/,
        include: /src/,
        failOnError: true,
        allowAsyncCycles: false,
        cwd: process.cwd(),
      },
    ],
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          disable: isDev,
        },
      },
    ],
  ],
  nextConfig,
)
