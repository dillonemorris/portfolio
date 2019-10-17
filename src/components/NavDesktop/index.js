import React from 'react'
import MyToggle from '../MyToggle'
import { Nav, StyledLink, MyToggleContainer } from './style'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const NavDesktop = ({ className, darkMode, setDarkMode }) => {
  const {
    colors: { activeNavLink },
  } = useContext(ThemeContext)

  return (
    <Nav className={className}>
      <StyledLink activeStyle={{ color: activeNavLink }} to="/writing/">
        Writing
      </StyledLink>
      <StyledLink activeStyle={{ color: activeNavLink }} to="/library/">
        Library
      </StyledLink>
      <StyledLink activeStyle={{ color: activeNavLink }} to="/about/">
        About
      </StyledLink>
      <MyToggleContainer>
        <MyToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </MyToggleContainer>
    </Nav>
  )
}

export default NavDesktop
