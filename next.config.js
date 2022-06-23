// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPWA({
  env: {
    GA_TRACKING_ID: 'UA-65891833-1',
  },
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
})
