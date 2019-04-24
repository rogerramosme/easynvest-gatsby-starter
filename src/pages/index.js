import React from 'react'

import Layout from 'components/Layout'
import Navbar from 'components/Navbar'
import SEO from 'config/seo'
import { IndexWrapper, HelloWorld } from './index.style'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <IndexWrapper>
      <Navbar />
      <HelloWorld />
    </IndexWrapper>
  </Layout>
)

export default IndexPage
