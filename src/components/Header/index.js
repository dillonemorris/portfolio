import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import Logo from '../../images/Logo'
import NavMobile from '../NavMobile'
import { Container, Inner, StyledLink, MobileIcon, Desktop } from './style'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!isMenuOpen)

  const animatedMenu = useSpring({
    transform: isMenuOpen ? `translate3d(0, 0, 0)` : `translate3d(100%, 0, 0)`,
  })

  return (
    <Container>
      <Inner>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
        <MobileIcon onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#11181E"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </MobileIcon>
        <Desktop />
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
