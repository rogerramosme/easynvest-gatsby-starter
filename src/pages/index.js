import React from 'react'
import styled from 'styled-components'

import Layout from 'components/Layout'
import Navbar from 'components/Navbar'
import HelloWorld from 'components/HelloWorld'
import SEO from 'config/seo'

const IndexWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

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
