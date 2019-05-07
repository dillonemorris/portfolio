import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`

const StyledLink = styled(Link)`
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

const HeaderNavDesktop = ({ className }) => (
  <Nav className={className}>
    <StyledLink activeStyle={{ color: '#4183d7' }} to="/projects/">
      Projects
    </StyledLink>
    <StyledLink activeStyle={{ color: '#4183d7' }} to="/writing/">
      Writing
    </StyledLink>
    <StyledLink activeStyle={{ color: '#4183d7' }} to="/library/">
      Library
    </StyledLink>
    <StyledLink activeStyle={{ color: '#4183d7' }} to="/about/">
      About
    </StyledLink>
  </Nav>
)

export default HeaderNavDesktop
