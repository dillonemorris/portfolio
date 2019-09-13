import styled from 'styled-components'

export const BgWrapper = styled.div`
  background-color: #f4f4f4;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

export const Container = styled.div`
  margin: 0px auto;
  max-width: 1080px;
  padding: 60px 1.0875rem 40px;
`

export const Heading = styled.h1`
  color: #11181e;
  font-weight: 500;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  font-size: 28px;
  letter-spacing: 0.3px;

  @media (min-width: 700px) {
    font-size: 40px;
  }
`

export const Paragraph = styled.div`
  color: #486581;
  font-size: 20px;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  padding-bottom: 50px;
  line-height: 1.5;
  max-width: 400px;
`

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
`
