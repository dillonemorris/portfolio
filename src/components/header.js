import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import { Link } from 'gatsby'
import styled from 'styled-components'
import '../styles/fonts.css'
import Logo from '../images/Logo'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #fff;
  margin: 0 auto;
  color: #11181e;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
`

const Inner = styled.div`
  padding: 0px 1.0875rem 0rem;
  width: 100%;
  margin: 0 auto;
  max-width: 1080px;
  display: flex;
  align-content: center;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: inherit;
`

const MobileIcon = styled.button`
  cursor: pointer;
  color: #2e2e35;
  display: inline-flex;
  background-color: none;
  border: none;

  :focus {
    outline: 1px solid #fff;
  }

  @media (min-width: 900px) {
    display: none;
  }
`

const Desktop = styled(NavDesktop)`
  display: none;

  @media (min-width: 900px) {
    display: flex;
  }
`

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
