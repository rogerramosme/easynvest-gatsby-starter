import styled from 'styled-components'
import { breakpoints } from 'shared/media'

export default styled.div`
  padding-left: 2.4rem;
  padding-right: 2.4rem;

  ${breakpoints.tablet`
    max-width: 120rem;
    margin: 0 auto;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  `};
`
