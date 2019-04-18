module.exports = {
  siteMetadata: {
    title: 'Easynvest Gatsby Starter',
    // eslint-disable-next-line max-len
    description:
      'Kick off your next, great Gatsby project with this starter. This barebones starter ships with the main Easynvest Stack to create awesome and cool stuf!',
    author: '@rodgerpaulo'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Poppins',
            variants: ['300', '500']
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'easynvest-gatsby-starter',
        short_name: 'Easynvest',
        start_url: '/',
        background_color: '#4E0250',
        theme_color: '#4E0250',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
      }
    }
  ]
}
