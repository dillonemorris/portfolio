import React, { useState, useContext } from 'react'
import { useSpring } from 'react-spring'
import { ThemeContext } from 'styled-components'
import Logo from '../../images/Logo'
import NavMobile from '../NavMobile'
import NavIcon from '../../icons/navIcon'
import {
  Container,
  Inner,
  StyledLink,
  MobileIcon,
  Desktop,
  MyToggleContainer,
} from './style'
import MyToggle from '../MyToggle'
import Light from '../../icons/Light'
import Dark from '../../icons/Dark'

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!isMenuOpen)
  const {
    colors: { navIcon },
  } = useContext(ThemeContext)

  const animatedMenu = useSpring({
    transform: isMenuOpen ? `translate3d(0, 0, 0)` : `translate3d(100%, 0, 0)`,
  })

  return (
    <Container>
      <Inner>
        <StyledLink to="/">
          <Logo />
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
        <MobileIcon onClick={toggleMenu}>
          <NavIcon color={navIcon} />
        </MobileIcon>
        <Desktop darkMode={darkMode} setDarkMode={setDarkMode} />
        <NavMobile
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          style={animatedMenu}
        />
      </Inner>
    </Container>
  )
}

export default Header
