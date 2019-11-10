import React, { useContext } from 'react'
import { Nav, Top, MobileIcon, StyledLink } from './style'
import { ThemeContext } from 'styled-components'

const NavMobile = ({ className, style, toggleMenu }) => {
  const {
    colors: { navIcon },
  } = useContext(ThemeContext)
  return (
    <Nav style={style} className={className}>
      <Top>
        <MobileIcon onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            width="32"
            viewBox="0 0 24 24"
            background="transparent"
          >
            <g
              stroke={navIcon}
              fill="none"
              height="32"
              width="32"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zM7 7l10 10M17 7L7 17" />
            </g>
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
}

export default NavMobile
