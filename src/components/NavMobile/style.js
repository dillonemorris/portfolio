import styled from 'styled-components'
import { Link } from 'gatsby'
import { animated } from 'react-spring'

export const Nav = styled(animated.nav)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 30px;
  position: fixed;
  background: ${({ theme }) => theme.colors.background};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
  overflow-y: scroll;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MobileIcon = styled.button`
  position: fixed;
  display: inline-flex;
  top: 26px;
  right: 26px;
  z-index: 1;
  background: none;
  border: none;

  :focus {
    outline: none;
  }
`

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.navLink};
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
