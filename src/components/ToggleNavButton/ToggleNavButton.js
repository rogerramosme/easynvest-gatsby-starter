import React from 'react'
import { bool, string } from 'prop-types'
import { Colors } from 'config/theme'

/* eslint-disable max-len */
const ToggleNavButton = ({ open, color, ...rest }) => {
  const pathString = open
    ? 'M11.296 10l7.6019-7.6019c.35842-.35842.35842-.93775 0-1.2962-.35842-.35842-.93775-.35842-1.2962 0L9.9998 8.7038 2.3979 1.1019c-.35842-.35842-.93775-.35842-1.2962 0-.35842.35842-.35842.93775 0 1.2962L8.7036 10l-7.6019 7.6019c-.35842.35842-.35842.93775 0 1.2962.17875.17875.41342.26858.64808.26858.23467 0 .46933-.089833.64808-.26858l7.6019-7.6019 7.6019 7.6019c.17875.17875.41342.26858.64808.26858.23467 0 .46933-.089833.64808-.26858.35842-.35842.35842-.93775 0-1.2962L11.29592 10z'
    : 'M1 12h16c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zM0 1c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1z'

  const viewBox = open ? '0 0 20 20' : '0 0 18 12'

  const fill = color

  return (
    <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d={pathString} fill={fill} fillRule="evenodd" />
    </svg>
  )
}

ToggleNavButton.propTypes = {
  open: bool,
  color: string
}

ToggleNavButton.defaultProps = {
  open: false,
  color: Colors.Purple
}

export default ToggleNavButton
