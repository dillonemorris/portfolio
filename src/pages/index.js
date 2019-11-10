import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import Callout from '../components/Callout'
import SEO from '../components/seo'
import { ThemeContext } from 'styled-components'

//icons
import DownArrow from '../icons/DownArrow'

//shapes
import Blob from '../images/Blob'
import BigBlob from '../images/BigBlob'
import SmallCircles from '../images/SmallCircles'
import Triangle from '../images/Triangle.svg'
import TriangleDark from '../images/TriangleDark.svg'

//styles
import { LargeBody } from '../components/globals'

import {
  Container,
  Landing,
  Intro,
  Heading,
  HeroHeadingContainer,
  BlobContainer,
  BigBlobContainer,
  SmallCirclesContainer,
  Background,
  CallToAction,
  DownArrowContainer,
} from './styles/homePageStyles'

const IndexPage = () => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <SEO title="Home" />
      <Background bg={theme.dark ? TriangleDark : Triangle}>
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
                Front End Developer{' '}
                <span style={{ color: theme.colors.secondaryHeading }}>
                  specializing in UI/UX Design
                </span>
              </Heading>
            </HeroHeadingContainer>
            <CallToAction>
              <LargeBody>Scroll on down</LargeBody>
              <DownArrowContainer>
                <DownArrow color={theme.colors.primaryLink} />
              </DownArrowContainer>
            </CallToAction>
          </Landing>
        </Container>
      </Background>
      <BigBlobContainer>
        <BigBlob color={theme.colors.bigBlob} />
      </BigBlobContainer>
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
