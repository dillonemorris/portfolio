import React from 'react'
import SEO from '../components/seo'
import styled from 'styled-components'
import Button from '../components/Button'
import Error from '../images/Error'

const Container = styled.div`
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
  max-width: 1200px;

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
`

const NotFoundPage = () => (
  <>
    <SEO title="404 - Not Found" />
    <Container>
      <Wrapper>
        <Error />
        <Heading>Woah!</Heading>
        <Body>Looks like you're doing a bit of off-roading there...</Body>
        <Button
          boxShadow={'5px 5px rgba(218, 162, 176, .4)'}
          boxShadowHover={'5px 5px rgba(218, 162, 176, 1)'}
          border={'3px solid rgba(218, 162, 176, 1)'}
          color={'rgba(218, 162, 176, 1)'}
          text={'go back'}
          page={'/projects/'}
        />
      </Wrapper>
    </Container>
  </>
)

export default NotFoundPage
