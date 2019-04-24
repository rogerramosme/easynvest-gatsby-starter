import styled from 'styled-components'
import { Colors } from 'config/theme'

export default styled.button`
  font-size: 1.4rem;
  line-height: 1.4rem;
  padding: 1.3rem 3rem;
  color: ${({ outline, theme }) => (outline ? theme.PrimaryColor : Colors.White)};
  background-color: ${({ outline, theme }) => (outline ? 'transparent' : theme.PrimaryColor)};
  border: solid 0.1rem ${({ outline, theme }) => (outline ? theme.PrimaryColor : 'transparent')};
  border-radius: 2.4rem;

  & + & {
    margin-left: 2.4rem;
  }
`
