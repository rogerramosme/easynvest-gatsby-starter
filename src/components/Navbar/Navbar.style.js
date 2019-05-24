import styled, { css } from 'styled-components'
import { Colors } from 'config/theme'
import Content from 'components/Content'
import { breakpoints } from 'shared/media'
import Button from 'components/Button'
import CurvedShape from 'images/curved-shape.svg'

export const NavbarWrapper = styled.nav`
  padding-top: 2.4rem;
  background: ${({ theme, negative }) => (negative ? theme.PrimaryColor : theme.BackgroundColor)};

  ${({ menuIsOpen, theme }) =>
    menuIsOpen
      ? css`
          height: 100vh;
          display: flex;
          flex-direction: column;
          width: 100vw;
          top: 0;
          position: fixed;
          z-index: 10;
          overflow-y: auto;
          background-color: ${theme.PageBackgroundColor};
        `
      : css`
          height: 6rem;
          padding-top: 1.5rem;
        `};

  ${breakpoints.tablet`
    padding-top: 0;
    height: 6.4rem;
    display: flex;
  `}
`

export const NavbarContent = styled(Content)`
  align-items: center;
  position: relative;
  flex-grow: 1;

  ${breakpoints.tablet`
    display: flex;
  `}
`

export const NavbarLogo = styled.img`
  max-width: 12.7rem;
  min-width: 10rem;

  ${breakpoints.tablet`
    max-width: 17rem;
  `}
`

export const LinkList = styled.ul`
  list-style-type: none;
  margin: 3.2rem 0 0;
  padding: 0;
  order: 2;
  height: 100%;

  ${breakpoints.tablet`
    display: flex;
    flex-grow: 1;
    order: 1;
    margin: 0;
    padding-left: 3.2rem;
    justify-content: center;
  `}
`

export const LinkItem = styled.li`
  display: flex;
`

export const NavbarLink = styled.a`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.FontWeight.light};
  border-bottom: none;
  padding: 1.8rem 0;
  align-items: center;
  display: flex;

  ${breakpoints.tablet`
    padding: 0.8rem 1rem;
    color: ${({ theme, negative }) => (negative ? Colors.White : theme.PageColor)};
    text-align: center;
    font-size: 1.2rem;
    border-bottom: solid 0.3rem transparent;

    &:hover{
      text-decoration: none;
      border-bottom-color: ${({ theme, negative }) =>
        `${negative ? theme.PageActiveColorNegative : theme.PageActiveColor}`};
    }

    border-bottom-color: ${({ active, theme, negative }) =>
      active && `${negative ? theme.PageActiveColorNegative : theme.PageActiveColor}`};


  `}

  ${breakpoints.desktop`
    font-size: 1.4rem;
    padding: 0.8rem 2rem;
  `}
`

export const ButtonWrapper = styled.div`
  order: 1;
  width: 100%;

  button + button {
    margin-top: 1.5rem;
  }

  ${breakpoints.phone`
    display: flex;

    button + button {
      margin-left: 2.4rem;
      margin-top: 0;
    }
  `}

  ${breakpoints.tablet`
    order: 2;
    width: auto;
  `}
`

export const LogoWraper = styled.div`
  display: flex;
  justify-content: center;
`

export const MenuWrapper = styled.menu`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-flow: column;
  padding: 0;
  margin: 5rem 0 0;
  height: 100%;
  align-items: center;

  ${breakpoints.tablet`
    margin: 0;
    display: flex;
    flex-grow: 1
    flex-flow: row;
  `}
`

export const NavbarButton = styled(Button)`
  font-size: 1.2rem;
  line-height: 1.6rem;
  padding: 0.8rem 1.6rem;
  flex-grow: 1;
  flex-basis: 100%;
  width: 100%;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
  & + & {
    margin-left: 1.4rem;
  }

  ${breakpoints.phone`
    flex-basis: 50%;
    width: auto;
  `}

  ${breakpoints.tablet`
    flex-grow: 0;
    flex-basis: auto;
  `}
`

export const MenuButton = styled.button.attrs({
  type: 'button'
})`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background: none;
  padding: 0.2rem;
  position: absolute;
  top: 0.4rem;
  right: 3rem;

  ${breakpoints.tablet`
    display: none;
  `}
`

export const SocialWrapper = styled.div`
  background-color: ${({ theme }) => theme.PrimaryColor};
  padding: 1.1rem 0 2.4rem;
  order: 3;
  margin-top: 4.5rem;
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1.5rem;
    background: url(${CurvedShape}) no-repeat;
    top: -1.5rem;
    background-size: cover;
  }
`

export const SocialTitle = styled.span`
  color: ${Colors.White};
  display: block;
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1.7rem;
`

export const SocialIconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const SocialIcon = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`
