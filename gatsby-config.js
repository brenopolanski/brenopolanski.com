module.exports = {
  siteMetadata: {
    title: 'Breno Polanski',
    description:
      'A developer who loves to learn new programming languages​​, build Open Source projects and play video game :)'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        }
      }
    }
  ]
};
