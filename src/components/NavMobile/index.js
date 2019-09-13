import React from 'react'
import { Nav, Top, MobileIcon, StyledLink } from './style'

const NavMobile = ({ className, style, toggleMenu }) => (
  <Nav style={style} className={className}>
    <Top>
      <MobileIcon onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#11181E"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </MobileIcon>
    </Top>
    <StyledLink onClick={toggleMenu} to="/projects/">
      Projects
    </StyledLink>
    <StyledLink onClick={toggleMenu} to="/writing/">
      Writing
    </StyledLink>
    <StyledLink onClick={toggleMenu} to="/library/">
      Library
    </StyledLink>
    <StyledLink onClick={toggleMenu} to="/about/">
      About
    </StyledLink>
  </Nav>
)

export default NavMobile
