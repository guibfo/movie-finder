import React from 'react'
import { FooterWrapper, Copyright } from './styled'

const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright>
        Movie Finder - {new Date().getFullYear()}
      </Copyright>
    </FooterWrapper>
  )
}

export default Footer
