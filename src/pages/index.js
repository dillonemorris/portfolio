import React from 'react'
import { graphql } from 'gatsby'
import Callout from '../components/Callout'
import SEO from '../components/seo'

//shapes
import Blob from '../images/Blob'
import SmallCircles from '../images/SmallCircles'
import Triangle from '../images/Triangle.svg'

//styles
import {
  Container,
  Landing,
  Intro,
  Heading,
  HeroHeadingContainer,
  BlobContainer,
  SmallCirclesContainer,
  Background,
} from './styles/homePageStyles'

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Background bg={Triangle}>
        <Container>
          <BlobContainer>
            <Blob />
          </BlobContainer>
          <Landing>
            <SmallCirclesContainer>
              <SmallCircles />
            </SmallCirclesContainer>
            <HeroHeadingContainer>
              <Intro>Hey, I’m Dillon!</Intro>
              <Heading>
                Front End Developer specializing in UI/UX Design
              </Heading>
            </HeroHeadingContainer>
            {/* <TriangleContainer>
              <Triangle />
            </TriangleContainer> */}
          </Landing>
        </Container>
      </Background>

      <Container>
        <Callout />
      </Container>
    </>
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
