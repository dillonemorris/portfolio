import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 0px;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
    padding: 120px 0px 100px;
  }
`

export const Img = styled.img`
  margin-bottom: 40px;

  @media (min-width: 700px) {
    max-width: 350px;
    max-height: 420px;
    margin-right: 40px;
    padding-bottom: 0px;
  }

  @media (min-width: 900px) {
    max-width: 450px;
    margin-right: 60px;
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: #11181e;
  font-weight: 500;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  letter-spacing: 0.3px;
  font-size: 36px;

  @media (min-width: 700px) {
    font-size: 48px;
  }
`

export const Paragraph = styled.p`
  color: #486581;
  font-size: 20px;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  line-height: 1.5;
`

export const Tagline = styled.button`
  font-family: Plex Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif !important;
  font-size: 18px;
  font-weight: 300;
  color: #4183d7;
  width: 200px;
  display: flex;
  align-items: center;
  padding: 0px;
  border: 0;
  background: none;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`
