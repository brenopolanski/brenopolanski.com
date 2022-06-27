// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const isDev = process.env.NODE_ENV === 'development'

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: isDev,
  },
})
