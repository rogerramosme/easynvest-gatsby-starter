import React, { useState, useEffect } from 'react'
import { sizes } from 'shared/media'

const IsMobileHoc = Component => {
  const isMobileHoc = props => {
    const [isMobile, setMobile] = useState(false)
    const handleMobile = () => {
      if (window.outerWidth >= sizes.tablet) {
        setMobile(false)
      } else if (!isMobile) {
        setMobile(true)
      }
    }

    useEffect(() => {
      window.addEventListener('resize', () => handleMobile())
      handleMobile()
      return () => {
        window.removeEventListener('resize', () => handleMobile())
      }
    }, [])
    const newProps = { isMobile, ...props }
    return <Component {...newProps} />
  }

  return isMobileHoc
}

export default IsMobileHoc
