import React, { useContext } from 'react'

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
import { LargeBody, H1 } from '../components/globals'

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

  const handleClick = () => {
    document.querySelector('#callout').scrollIntoView({
      behavior: 'smooth',
    })
  }

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
            <CallToAction onClick={handleClick}>
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
      <div style={{ background: theme.colors.homePageGradient }}>
        <Container id="callout">
          <Callout />
          <H1>I'm really good at...</H1>
        </Container>
      </div>
    </>
  )
}

export default IndexPage
