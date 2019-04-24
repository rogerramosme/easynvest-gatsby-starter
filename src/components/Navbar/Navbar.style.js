import styled from 'styled-components'
import Content from 'components/Content'
import { breakpoints } from 'shared/media'
import Button from 'components/Button'
import CurvedShape from 'images/curved-shape.svg'

export const NavbarWrapper = styled.nav`
  padding: 2.4rem 0;
`

export const NavbarContent = styled(Content)`
  align-items: center;
  position: relative;

  ${breakpoints.tablet`
    display: flex;
  `}
`

export const NavbarLogo = styled.img`
  max-width: 17rem;
  margin-bottom: 5rem;

  ${breakpoints.tablet`
    margin-bottom: 0;
  `}
`

export const LinkList = styled.ul`
  list-style-type: none;
  margin: 3.2rem 0 0;
  padding: 0;
  order: 2;

  ${breakpoints.tablet`
    display: flex;
    flex-grow: 1;
    order: 1;
    margin: 0;
    padding-left: 3.2rem;
  `}
`

export const LinkItem = styled.li`
  display: flex;
`

export const NavbarLink = styled.a`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.FontWeight.light};
  border-bottom: none;
  color: ${({ active, theme }) => active && theme.PageActiveColor};
  font-weight: ${({ active }) => active && 'bold'};
  padding: 1.8rem 0;

  ${breakpoints.tablet`
    padding: 0.8rem 3.2rem;
    color: ${({ theme }) => theme.PageColor};
    border-bottom: ${({ active, theme }) => active && `solid 0.3rem ${theme.PageActiveColor}`};
    font-weight: ${({ active }) => active && 'normal'};
  `}
`

export const ButtonWrapper = styled.div`
  order: 1;
  width: 100%;
  display: flex;

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
  margin: 0;

  ${breakpoints.tablet`
    display: flex;
    flex-grow: 1
    flex-flow: row;
  `}
`

export const NavbarButton = styled(Button)`
  flex-grow: 1;
  flex-basis: 50%;

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
  top: 1rem;
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
  color: #ffffff;
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
