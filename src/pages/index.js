import React from 'react'
import {
  Container,
  Wrapper,
  Intro,
  Heading,
  MyContainer,
  Img,
} from './styles/homePageStyles'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Button from '../components/Button'
import SEO from '../components/seo'

const IndexPage = () => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <SEO title="Home" />
      <Container>
        <MyContainer>
          <Intro>Hey, I’m Dillon!</Intro>
          <Heading>Front End Developer specializing in UI/UX Design</Heading>
        </MyContainer>
      </Container>
    </>
  )
}

export default IndexPage
