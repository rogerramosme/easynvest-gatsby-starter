import styled from 'styled-components'
import HelloWorldComponent from 'components/HelloWorld'

export const IndexWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const HelloWorld = styled(HelloWorldComponent)`
  flex-grow: 1;
`
