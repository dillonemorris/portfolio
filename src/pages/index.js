import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import SEO from '../components/seo'
import featureCardData from '../data/featureCardData'
import projectData from '../data/projectData'

import Callout from '../components/Callout'
import FeatureCard from '../components/FeatureCard'
import ProjectCard from '../components/ProjectCard'

//icons
import DownArrow from '../icons/DownArrow'
import Projects from '../icons/Projects'

//shapes
import Blob from '../images/Blob'
import BigBlob from '../images/BigBlob'
import SmallCircles from '../images/SmallCircles'
import Triangle from '../images/Triangle.svg'
import TriangleDark from '../images/TriangleDark.svg'
import Squares from '../images/Squares'
import Waves from '../images/Waves.svg'
import WavesDark from '../images/WavesDark.svg'
import Triangles from '../images/Triangles'

//styles
import { LargeBody, H1, H3, Container, Background } from '../components/globals'
import {
  Landing,
  Intro,
  Heading,
  HeroHeadingContainer,
  BlobContainer,
  BigBlobContainer,
  SmallCirclesContainer,
  CallToAction,
  DownArrowContainer,
  FeatureCardContainer,
  ProjectsContainer,
  ProjectsHeadingContainer,
  ProjectCardContainer,
  ProjectBackground,
} from '../styles/page-styles/home-page-styles'

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
      <Background
        position="bottom left"
        size="210vh"
        bg={theme.dark ? TriangleDark : Triangle}
      >
        <Container>
          <BlobContainer position="right">
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
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: theme.spacing._4 }}>
              <Squares />
            </div>
            <H1>I'm really good at...</H1>
          </div>
          <FeatureCardContainer>
            {featureCardData.map(feature => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </FeatureCardContainer>
        </Container>
      </div>
      <Background
        position="bottom"
        size="100%"
        bg={theme.dark ? WavesDark : Waves}
      >
        <Container>
          <BlobContainer>
            <Blob color={theme.colors.blob} />
          </BlobContainer>
          <ProjectsContainer>
            <ProjectsHeadingContainer>
              <Projects color={theme.colors.body} />
              <H3 style={{ marginLeft: theme.spacing._3 }}>Projects</H3>
            </ProjectsHeadingContainer>
            <ProjectCardContainer>
              {projectData.map((project, i) => (
                <>
                  <ProjectBackground
                    color={
                      i % 2 === 0
                        ? theme.colors.primaryProjectBackground
                        : theme.colors.secondaryProjectBackground
                    }
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      btnText={project.btnText}
                      color={project.color}
                      page={project.page}
                      screenshot={project.screenshot}
                    />
                  </ProjectBackground>
                </>
              ))}
            </ProjectCardContainer>
          </ProjectsContainer>
          <div style={{ width: '100px', marginLeft: 'auto' }}>
            <Triangles />
          </div>
        </Container>
      </Background>
    </>
  )
}

export default IndexPage
