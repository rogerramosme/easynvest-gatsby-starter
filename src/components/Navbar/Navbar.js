import React, { useEffect, useState } from 'react'
import easynvestlogo from 'images/easynvest-logo.svg'
import { sizes } from 'shared/media'
import Content from 'components/Content'
import Close from 'images/icons/close.svg'
import Menu from 'images/icons/menu.svg'
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

export default () => {
  const [isMobile, setMobile] = useState(false)
  const [menuIsVisible, setMenuVisibility] = useState(false)
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

  return (
    <NavbarWrapper fixed={isMobile && menuIsVisible}>
      <NavbarContent>
        <MenuButton onClick={() => setMenuVisibility(!menuIsVisible)} size="2.2rem">
          <img src={menuIsVisible ? Close : Menu} alt="Fechar menu" />
        </MenuButton>
        <LogoWraper>
          <a href="https://easynvest.com.br">
            <NavbarLogo src={easynvestlogo} alt="Logo" />
          </a>
        </LogoWraper>
        <MenuWrapper visible={menuIsVisible}>
          <LinkList>
            <LinkItem>
              <NavbarLink active href="https://www.easynvest.com.br">
                Link
              </NavbarLink>
            </LinkItem>
            <LinkItem>
              <NavbarLink href="https://www.easynvest.com.br">Link</NavbarLink>
            </LinkItem>
            <LinkItem>
              <NavbarLink href="https://www.easynvest.com.br">Link</NavbarLink>
            </LinkItem>
          </LinkList>
          <ButtonWrapper>
            <NavbarButton type="button">Cadastre-se</NavbarButton>
            <NavbarButton outline type="button">
              Login
            </NavbarButton>
          </ButtonWrapper>
        </MenuWrapper>
      </NavbarContent>
      {isMobile && menuIsVisible && (
        <SocialWrapper>
          <Content>
            <SocialTitle>Nossas redes sociais</SocialTitle>
            <SocialIconWrapper>
              {socialItems.map(({ url, icon, title }) => (
                <a href={url}>
                  <SocialIcon src={icon} title={title} key={title} size="4.2rem" />
                </a>
              ))}
            </SocialIconWrapper>
          </Content>
        </SocialWrapper>
      )}
    </NavbarWrapper>
  )
}
