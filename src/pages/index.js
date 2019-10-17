import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
// import Image from '../components/Image'
import Button from '../components/Button'
import SEO from '../components/seo'
import ProfilePic from '../images/ProfilePic.jpg'

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

const IndexPage = () => {
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

        {/* <Image src={ProfilePic} /> */}
      </Container>
      <TriangleContainer>
        <Triangle />
      </TriangleContainer>
    </Background>
  )
}

export default IndexPage
