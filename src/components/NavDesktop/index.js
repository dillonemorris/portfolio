import React from 'react'
import MyToggle from '../MyToggle'
import Light from '../../icons/Light'
import Dark from '../../icons/Dark'
import { Nav, StyledLink, MyToggleContainer } from './style'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const NavDesktop = ({ className, darkMode, setDarkMode }) => {
  const {
    colors: { activeNavLink },
  } = useContext(ThemeContext)

  return (
    <Nav className={className}>
      <StyledLink activeStyle={{ color: activeNavLink }} to="/">
        Home
      </StyledLink>
      <StyledLink activeStyle={{ color: activeNavLink }} to="/blog/">
        Blog
      </StyledLink>
      <StyledLink activeStyle={{ color: activeNavLink }} to="/about/">
        About
      </StyledLink>
      <MyToggleContainer>
        <MyToggle
          toggle={darkMode}
          setToggle={setDarkMode}
          icons={{
            checked: <Dark alt="Moon" style={{ pointerEvents: 'none' }} />,
            unchecked: <Light alt="Sun" style={{ pointerEvents: 'none' }} />,
          }}
        />
      </MyToggleContainer>
    </Nav>
  )
}

export default NavDesktop
