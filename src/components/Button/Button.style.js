import styled, { css } from 'styled-components'
import { Colors } from 'config/theme'

export default styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  padding: 1.2rem 2.2rem;
  color: ${({ outline }) => (outline ? Colors : Colors.White)};
  background-color: ${({ outline, theme }) => (outline ? 'transparent' : theme.PrimaryColor)};
  border: solid 1px ${({ outline, theme }) => (outline ? theme.PrimaryColor : 'transparent')};
  border-radius: 2.4rem;
  ${({ width }) => width && `width: ${width}`};

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }

  ${({ negative, outline, mobileNotOpen }) =>
    negative && mobileNotOpen
      ? css`
          background-color: ${outline ? 'transparent' : Colors.Blue};
          color: ${outline ? Colors.White : Colors.Purple};
          border: solid 0.1rem ${outline ? Colors.White : 'transparent'};
        `
      : css`
          background-color: ${outline ? 'transparent' : Colors.Pink};
          color: ${outline ? Colors.Pink : Colors.White};
          border: solid 0.1rem ${outline ? Colors.Pink : 'transparent'};
        `}
`
