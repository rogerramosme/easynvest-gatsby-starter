import React from 'react'
import { string } from 'prop-types'
import { BgEasy, Title, Subtitle } from './HelloWorld.style'

const HelloWorld = ({ className }) => (
  <BgEasy className={className}>
    <Title>Easystarter</Title>
    <Subtitle>Tudo tem um começo.</Subtitle>
  </BgEasy>
)

export default HelloWorld

HelloWorld.propTypes = {
  className: string
}

HelloWorld.defaultProps = {
  className: ''
}
