import React from 'react'
import { Nav, StyledLink } from './style'

const NavDesktop = ({ className }) => (
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

export default NavDesktop
