import { Link } from 'gatsby'
import styled from 'styled-components'
import NavDesktop from '../NavDesktop'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 0px;
  background-color: ${props => props.theme.colors.background};
  margin: 0 auto;
  z-index: 5;

  position: -webkit-sticky;
  position: sticky;
  top: 0;
`

export const Inner = styled.div`
  padding: 0px 1.0875rem 0rem;
  width: 100%;
  margin: 0 auto;
  max-width: 1080px;
  display: flex;
  align-content: center;
  justify-content: space-between;
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`

export const MobileIcon = styled.button`
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

export const Desktop = styled(NavDesktop)`
  display: none;

  @media (min-width: 900px) {
    display: flex;
  }
`

export const MyToggleContainer = styled.div`
  display: flex;

  @media (min-width: 900px) {
    display: none;
  }
`
