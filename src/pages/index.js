import React from 'react'
import { graphql } from 'gatsby'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Button from '../components/Button'
import Callout from '../components/Callout'
import SEO from '../components/seo'

//shapes
import Blob from '../images/Blob'
import SmallCircles from '../images/SmallCircles'
import Triangle from '../images/Triangle'

//styles
import {
  Container,
  Intro,
  Heading,
  HeroHeadingContainer,
  BlobContainer,
  SmallCirclesContainer,
  TriangleContainer,
  Background,
} from './styles/homePageStyles'

const IndexPage = ({ data }) => {
  // const theme = useContext(ThemeContext)

  return (
    <Background>
      <SEO title="Home" />
      <Container>
        <BlobContainer>
          <Blob />
        </BlobContainer>

        <SmallCirclesContainer>
          <SmallCircles />
        </SmallCirclesContainer>

        <HeroHeadingContainer>
          <Intro>Hey, I’m Dillon!</Intro>
          <Heading>Front End Developer specializing in UI/UX Design</Heading>
        </HeroHeadingContainer>
      </Container>
      <TriangleContainer>
        <Triangle />
      </TriangleContainer>
      <Container>
        <Callout />
      </Container>
    </Background>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "../images/ProfilePic.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
