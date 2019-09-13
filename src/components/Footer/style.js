import styled from 'styled-components'
import '../../styles/fonts.css'

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  height: 110px;
  background-color: #fff;
  margin: 0 auto;
  color: #11181e;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
`

export const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    width: 100%;
    flex-direction: row;
    padding: 0px 1.0875rem 0px;
    justify-content: space-between;
  }
`

export const Left = styled.div`
  font-family: Plex Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif !important;
  letter-spacing: 0.5px;
  font-size: 14px;
  padding-top: 10px;
  font-weight: 300;
  order: 2;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 13px;
    padding-top: 0px;
    order: 1;
    text-align: left;
  }
`

export const CodeLink = styled.div`
  color: #4183d7;
  text-decoration: none;
  padding-bottom: 10px;

  @media (min-width: 600px) {
    padding-bottom: 0px;
  }

  :hover {
    cursor: pointer;
    transition: all 200ms ease-in-out;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  order: 1;
  width: 180px;
  padding-top: 16px;

  @media (min-width: 600px) {
    font-size: 14px;
    padding-top: 0px;
    order: 1;
    text-align: left;
  }
`

export const SocialLink = styled.div`
  width: 20px;
`

export const Link = styled.a`
  color: #11181e;
  font-size: 13px;
  text-decoration: none;
`

export const SocialIcon = styled.svg`
  :hover {
    cursor: pointer;
    fill: #4183d7;
    transition: all 170ms ease-in-out;
  }
`
