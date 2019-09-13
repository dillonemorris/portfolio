import styled from 'styled-components'
import { Link } from 'gatsby'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  font-size: 15px;
  font-weight: 400;
  color: #11181e;
  padding-left: 60px;
  letter-spacing: 0.3px;

  :hover {
    cursor: pointer;
    color: #4183d7;
    transition: all 170ms ease-in-out;
  }
`
