import { Link } from 'gatsby'
import styled from 'styled-components'
import NavDesktop from '../NavDesktop'
import '../../styles/fonts.css'

export const Container = styled.div`
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
  width: inherit;
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
