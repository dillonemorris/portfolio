import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import '../styles/fonts.css'
import Logo from '../images/Logo'
import noScroll from 'no-scroll'
import HeaderNavDesktop from './HeaderNavDesktop'
import HeaderNavMobile from './HeaderNavMobile'

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

const NavDesktop = styled(HeaderNavDesktop)`
  display: none;

  @media (min-width: 900px) {
    display: flex;
  }
`

const NavMobile = styled(HeaderNavMobile)`
  transition: all 0.5s ease;
  visibility: ${props => (props.isMenuOpen ? 'visible' : 'hidden')};
  transform: ${props =>
    props.isMenuOpen ? 'translateX(calc(100vw - 280px))' : 'translateX(100vw)'};
`

const MobileUnderlay = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  visibility: ${props => (props.isMenuOpen ? 'visible' : 'hidden')};
`

class Header extends Component {
  state = {
    isMenuOpen: false,
  }

  onMenuOpen = () => {
    this.setState({ isMenuOpen: true })
    noScroll.on()
  }

  onMenuClose = () => {
    this.setState({ isMenuOpen: false })
    noScroll.off()
  }

  render() {
    return (
      <Container>
        <Inner>
          <StyledLink to="/">
            <Logo />
          </StyledLink>
          <MobileIcon onClick={this.onMenuOpen}>
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
          <NavDesktop />
          <NavMobile
            onMenuClose={this.onMenuClose}
            isMenuOpen={this.state.isMenuOpen}
          />
        </Inner>
        <MobileUnderlay
          onClick={this.onMenuClose}
          isMenuOpen={this.state.isMenuOpen}
        />
      </Container>
    )
  }
}

export default Header
