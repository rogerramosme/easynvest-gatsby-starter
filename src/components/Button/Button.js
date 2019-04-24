import React from 'react'
import { node, string, bool } from 'prop-types'
import ButtonWrapper from './Button.style'

const Button = ({ children, type, outline, ...rest }) => (
  <ButtonWrapper outline={outline} type={type} {...rest}>
    {children}
  </ButtonWrapper>
)

Button.propTypes = {
  children: node.isRequired,
  type: string,
  outline: bool
}

Button.defaultProps = {
  type: 'button',
  outline: false
}

export default Button
