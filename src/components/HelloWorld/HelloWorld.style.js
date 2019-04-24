import styled from 'styled-components'
import BgEasynvest from 'images/easynvest-bg.svg'
import { breakpoints } from 'shared/media'

export const BgEasy = styled.div`
  background: url(${BgEasynvest}) no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-flow: column;

  ${breakpoints.fullHd`
    background-position: initial
  `}
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.FontFamily};
  font-size: 3.6rem;
  line-height: 1.8;
  color: #fff;

  ${breakpoints.tablet`
    font-size: 6.4rem;
  `}
`

export const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.FontFamily};
  font-weight: ${({ theme }) => theme.FontWeight.light};
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: #fff;

  ${breakpoints.tablet`
    font-size: 1.8rem;
  `}
`
