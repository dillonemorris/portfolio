import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import featureCardData from '../data/featureCardData'
import projectData from '../data/projectData'

import Callout from '../components/Callout'
import FeatureCard from '../components/FeatureCard'
import ProjectCard from '../components/ProjectCard'
import BlogPostCard from '../components/BlogPostCard'

//icons
import DownArrow from '../icons/DownArrow'
import Projects from '../icons/Projects'
import Blog from '../icons/Blog'
import Arrow from '../icons/Arrow'

//shapes
import Blob from '../images/Blob'
import BigBlob from '../images/BigBlob'
import SmallCircles from '../images/SmallCircles'
import Triangle from '../images/Triangle.svg'
import TriangleDark from '../images/TriangleDark.svg'
import Squares from '../images/Squares'
import Waves from '../images/Waves.svg'
import WavesDark from '../images/WavesDark.svg'
import TriangleWiggle from '../images/TriangleWiggle'

//styles
import {
  Body,
  LargeBody,
  H1,
  H3,
  Container,
  Background,
} from '../components/globals'

import {
  MyContainer,
  Landing,
  Heading,
  HeroHeading,
  BlobContainer,
  BigBlobContainer,
  SmallCirclesContainer,
  CallToAction,
  DownArrowContainer,
  FeatureCardContainer,
  ProjectsContainer,
  ProjectsDescription,
  SectionHeading,
  BlogCTA,
  BlogHeading,
  BlogCardContainer,
  HeadingContainer,
  ProjectCardContainer,
  SquaresContainer,
  TriangleWiggleContainer,
  IconContainer,
} from '../styles/page-styles/home-page-styles'

const IndexPage = ({ data }) => {
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
        <Container paddingBottom={theme.spacing._8}>
          <BlobContainer position="right">
            <Blob />
          </BlobContainer>
          <Landing>
            <SmallCirclesContainer>
              <SmallCircles />
            </SmallCirclesContainer>
            <HeroHeading>
              <Heading>
                I craft{' '}
                <span style={{ color: theme.colors.secondaryHeading }}>
                  quality React frontends{' '}
                </span>{' '}
                and have a passion for{' '}
                <span style={{ color: theme.colors.secondaryHeading }}>
                  usability.
                </span>{' '}
              </Heading>
            </HeroHeading>
            <CallToAction onClick={handleClick}>
              <LargeBody>Scroll on down</LargeBody>
              <DownArrowContainer id="callout">
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
        <Container>
          <Callout />
          <div style={{ display: 'flex', zIndex: 1 }}>
            <SquaresContainer>
              <Squares />
            </SquaresContainer>
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
            <TriangleWiggleContainer>
              <TriangleWiggle color={theme.colors.triangleWiggle} />
            </TriangleWiggleContainer>
          </FeatureCardContainer>
        </Container>
      </div>
      <Background
        position="bottom"
        size="100%"
        bg={theme.dark ? WavesDark : Waves}
      >
        <Container paddingBottom={theme.spacing._6}>
          <BlobContainer>
            <Blob color={theme.colors.blob} />
          </BlobContainer>
          <ProjectsContainer>
            <div>
              <SectionHeading>
                <IconContainer>
                  <Projects color={theme.colors.body} />
                </IconContainer>
                <HeadingContainer>
                  <H3>Projects</H3>
                </HeadingContainer>
              </SectionHeading>
              <ProjectsDescription>
                <LargeBody>
                  Building things is the best way to learn in my opinion. Here
                  are just a couple of the personal projects I've completed.
                </LargeBody>
              </ProjectsDescription>
            </div>
            <ProjectCardContainer>
              {projectData.map((project, i) => (
                <Background
                  key={project.title}
                  style={{ marginBottom: theme.spacing._8 }}
                  color={
                    i % 2 === 0
                      ? theme.colors.primaryProjectBackground
                      : theme.colors.secondaryProjectBackground
                  }
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                    href={project.page}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      page={project.page}
                      color={
                        i % 2 === 0
                          ? theme.colors.primaryTag
                          : theme.colors.secondaryTag
                      }
                      secondaryColor={
                        i % 2 === 0
                          ? theme.colors.primaryTagBackground
                          : theme.colors.secondaryTagBackground
                      }
                      tags={project.tags}
                    />
                  </a>
                </Background>
              ))}
            </ProjectCardContainer>
          </ProjectsContainer>
        </Container>
      </Background>
      <Background color={theme.colors.background}>
        <MyContainer>
          <BlogHeading>
            <SectionHeading>
              <IconContainer>
                <Blog color={theme.colors.body} />
              </IconContainer>
              <HeadingContainer>
                <H3>Blog</H3>
              </HeadingContainer>
            </SectionHeading>
            <BlogCTA>
              <Link
                style={{ textDecoration: 'none', marginRight: '8px' }}
                to="/blog"
              >
                <Body color={theme.colors.primaryLink}>See all posts</Body>
              </Link>
              <Arrow color={theme.colors.primaryLink} />
            </BlogCTA>
          </BlogHeading>
          <BlogCardContainer>
            {data.allMdx.edges.map(({ node }) => (
              <div key={node.id}>
                <Link style={{ textDecoration: 'none' }} to={node.fields.slug}>
                  <BlogPostCard
                    timeToRead={node.timeToRead}
                    date={node.frontmatter.date}
                    title={node.frontmatter.title}
                    excerpt={node.frontmatter.excerpt}
                  />
                </Link>
              </div>
            ))}
          </BlogCardContainer>
        </MyContainer>
      </Background>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 2) {
      totalCount
      edges {
        node {
          timeToRead
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
