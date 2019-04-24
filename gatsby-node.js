const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  const { setWebpackConfig } = actions

  setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        config: path.resolve(__dirname, 'src/config/'),
        images: path.resolve(__dirname, 'src/images/'),
        pages: path.resolve(__dirname, 'src/pages/'),
        shared: path.resolve(__dirname, 'src/shared/')
      }
    }
  })
}
