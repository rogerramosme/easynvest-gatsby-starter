import React, { useState } from 'react'
import { bool } from 'prop-types'
import IsMobileHoc from 'components/IsMobileHoc'
import ToggleNavButton from 'components/ToggleNavButton'
import EasynvestLogo from 'images/easynvest-logo.svg'
import EasynvestLogoNegative from 'images/easynvest-logo-negative.svg'
import Content from 'components/Content'
import { Colors } from 'config/theme'
import Facebook from 'images/icons/social-facebook.svg'
import Instagram from 'images/icons/social-instagram.svg'
import Youtube from 'images/icons/social-youtube.svg'
import Twitter from 'images/icons/social-twitter.svg'
import Linkedin from 'images/icons/social-linkedin.svg'
import {
  NavbarContent,
  NavbarLogo,
  MenuWrapper,
  MenuButton,
  LogoWraper,
  NavbarWrapper,
  LinkList,
  LinkItem,
  NavbarLink,
  ButtonWrapper,
  NavbarButton,
  SocialWrapper,
  SocialTitle,
  SocialIcon,
  SocialIconWrapper
} from './Navbar.style'

const socialItems = [
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/user/easynvest',
    icon: Youtube
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/easynvest/',
    icon: Instagram
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/easynvest',
    icon: Facebook
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/Easynvest',
    icon: Twitter
  },
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/company/easynvest---t-tulo-corretora-de-valores-sa/',
    icon: Linkedin
  }
]

const handleNavigationClick = (event, scrollToSection) => {
  if (scrollToSection) {
    event.preventDefault()
    document.querySelector(event.target.hash).scrollIntoView({
      behavior: 'smooth'
    })
  }
}

const Navbar = ({ isMobile, negative }) => {
  const [menuIsOpen, setMenuVisibility] = useState(false)
  const color = negative && !menuIsOpen ? Colors.White : Colors.Purple
  return (
    <NavbarWrapper menuIsOpen={isMobile && menuIsOpen} negative={negative}>
      <NavbarContent>
        <MenuButton onClick={() => setMenuVisibility(!menuIsOpen)} size="2.2rem">
          <ToggleNavButton open={menuIsOpen} negative={negative} color={color} />
        </MenuButton>
        <LogoWraper>
          <a href="https://www.easynvest.com.br">
            <NavbarLogo
              width="170"
              src={menuIsOpen || !negative ? EasynvestLogoNegative : EasynvestLogo}
              alt="Logo"
            />
          </a>
        </LogoWraper>
        <MenuWrapper visible={isMobile && menuIsOpen}>
          <LinkList>
            <LinkItem>
              <NavbarLink
                active
                negative={negative}
                href="#hero"
                onClick={event => handleNavigationClick(event, true)}
              >
                Link
              </NavbarLink>
            </LinkItem>
            <LinkItem>
              <NavbarLink
                negative={negative}
                href="#hero"
                onClick={event => handleNavigationClick(event, true)}
              >
                Link
              </NavbarLink>
            </LinkItem>
            <LinkItem>
              <NavbarLink
                negative={negative}
                href="#hero"
                onClick={event => handleNavigationClick(event, true)}
              >
                Link
              </NavbarLink>
            </LinkItem>
          </LinkList>
          <ButtonWrapper>
            <NavbarButton
              as="a"
              mobileNotOpen={!isMobile && !menuIsOpen}
              negative={negative}
              href="https://www.easynvest.com.br/autenticacao/pre-cadastro"
              onClick={event => handleNavigationClick(event, false)}
            >
              Abra sua conta
            </NavbarButton>
            <NavbarButton
              as="a"
              outline
              mobileNotOpen={!isMobile && !menuIsOpen}
              negative={negative}
              href="https://www.easynvest.com.br/autenticacao/"
              onClick={event => handleNavigationClick(event, false)}
            >
              Login
            </NavbarButton>
          </ButtonWrapper>
        </MenuWrapper>
      </NavbarContent>
      {isMobile && menuIsOpen && (
        <SocialWrapper>
          <Content>
            <SocialTitle>Nossas redes sociais</SocialTitle>
            <SocialIconWrapper>
              {socialItems.map(({ url, icon, title }) => (
                <a href={url} key={`nav-${title}`}>
                  <SocialIcon src={icon} title={title} size="4.2rem" />
                </a>
              ))}
            </SocialIconWrapper>
          </Content>
        </SocialWrapper>
      )}
    </NavbarWrapper>
  )
}

Navbar.propTypes = {
  isMobile: bool,
  negative: bool
}

Navbar.defaultProps = {
  isMobile: false,
  negative: false
}

export default IsMobileHoc(Navbar)
