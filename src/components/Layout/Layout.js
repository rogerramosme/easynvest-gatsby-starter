import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from 'config/global-styles'
import { Theme } from 'config/theme'
import { ThemeProvider } from 'styled-components'

const selectedTheme = 'default'

const Layout = ({ children }) => (
  <ThemeProvider theme={Theme[selectedTheme]}>
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
