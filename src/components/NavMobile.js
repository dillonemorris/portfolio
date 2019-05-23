import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = styled(animated.nav)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 30px;
  position: fixed;
  background: #fff;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
  overflow-y: scroll;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const MobileIcon = styled.button`
  position: fixed;
  display: inline-flex;
  top: 26px;
  right: 26px;
  z-index: 1;
  background-color: none;
  border: none;

  :focus {
    outline: 1px solid #fff;
  }
`

const StyledLink = styled(Link)`
  font-family: Plex mono;
  color: inherit;
  text-decoration: none;
  display: flex;
  font-weight: 600;
  padding-left: 20px;
  padding: 1.4rem;
  font-size: 24px;

  :hover {
    cursor: pointer;
    color: #4183d7;
    transition: all 170ms ease-in-out;
  }
`

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
