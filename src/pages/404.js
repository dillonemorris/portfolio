import React, { Fragment } from 'react'
import SEO from '../components/seo'
import styled from 'styled-components'
import Button from '../components/Button'
import Error from '../images/Error'

const Container = styled.div`
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
  max-width: 1080px;

  @media (min-width: 600px) {
    margin: 0px auto;
  }
`

const Heading = styled.h1`
  padding-top: 32px;
  color: #11181e;
  margin-bottom: 12px;
  font-size: 36px;

  @media (min-width: 700px) {
    font-size: 48px;
  }
`

const Body = styled.p`
  color: #486581;
  font-size: 20px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto 20px;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
`

const StyledButton = styled(Button)`
  font-family: Plex mono;
  font-size: 14px;
  letter-spacing: 0.8px;
  font-weight: 600;
  background: #fff;
  border: 3px solid #11181e;
  box-shadow: 5px 5px rgba(218, 162, 176, 0.4);
  padding: 10px 30px;
  text-decoration: none;
  color: #11181e;
  transition: all 170ms ease-in-out;
  width: 100%;

  @media (min-width: 600px) {
    width: auto;
  }

  :hover {
    box-shadow: 5px 5px rgba(218, 162, 176, 1);
    cursor: pointer;
    border: 3px solid rgba(218, 162, 176, 1);
    color: rgba(218, 162, 176, 1);
  }
`

const NotFoundPage = () => (
  <Fragment>
    <SEO title="404 - Not Found" />
    <Container>
      <Wrapper>
        <Error />
        <Heading>Woah!</Heading>
        <Body>Looks like you're doing a bit of off-roading there...</Body>
        <StyledButton text={'go back'} page={'/projects/'} />
      </Wrapper>
    </Container>
  </Fragment>
)

export default NotFoundPage
