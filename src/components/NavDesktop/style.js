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
  color: ${props => props.theme.colors.navLink};
  padding: 0px 30px;
  letter-spacing: 0.3px;

  :hover {
    cursor: pointer;
    color: ${props => props.theme.colors.activeNavLink};
    transition: all 170ms ease-in-out;
  }
`

export const MyToggleContainer = styled.div`
  padding: 6px 0px 0px 30px;
`
