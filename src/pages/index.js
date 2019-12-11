import React, { useContext } from 'react'
import { Link, graphql } from 'gatsby'
import { ThemeContext } from 'styled-components'
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
import Triangles from '../images/Triangles'
import TriangleWiggle from '../images/TriangleWiggle'

//styles
import {
  Body,
  LargeBody,
  H1,
  H3,
  H4,
  Container,
  Background,
} from '../components/globals'
import {
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
  SectionHeading,
  BlogCTA,
  BlogHeading,
  CardContainer,
  TrianglesContainer,
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
              <H4 paddingBottom={theme.spacing._1}>Hey, I’m Dillon!</H4>
              <Heading>
                Front End Developer{' '}
                <span style={{ color: theme.colors.secondaryHeading }}>
                  specializing in UI/UX Design
                </span>
              </Heading>
            </HeroHeading>
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
            <TriangleWiggle color={theme.colors.triangleWiggle} />
          </FeatureCardContainer>
        </Container>
      </div>
      <Background
        position="bottom"
        size="100%"
        bg={theme.dark ? WavesDark : Waves}
      >
        <Container paddingBottom={theme.spacing._12}>
          <BlobContainer>
            <Blob color={theme.colors.blob} />
          </BlobContainer>
          <ProjectsContainer>
            <SectionHeading paddingBottom={theme.spacing._12}>
              <Projects color={theme.colors.body} />
              <H3 style={{ marginLeft: theme.spacing._3 }}>Projects</H3>
            </SectionHeading>
            <CardContainer>
              {projectData.map((project, i) => (
                <Background
                  key={project.title}
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
                </Background>
              ))}
            </CardContainer>
          </ProjectsContainer>
          <TrianglesContainer>
            <Triangles />
          </TrianglesContainer>
        </Container>
      </Background>
      <Background color={theme.colors.background}>
        <Container
          paddingTop={theme.spacing._24}
          paddingBottom={theme.spacing._24}
        >
          <BlogHeading>
            <SectionHeading>
              <Blog color={theme.colors.body} />
              <H3 style={{ marginLeft: theme.spacing._2 }}>Blog</H3>
            </SectionHeading>
            <BlogCTA>
              <Link style={{ textDecoration: 'none' }} to="/writing">
                <Body
                  style={{ marginRight: theme.spacing._2 }}
                  color={theme.colors.primaryLink}
                >
                  See all posts
                </Body>
              </Link>
              <Arrow color={theme.colors.primaryLink} />
            </BlogCTA>
          </BlogHeading>
          <CardContainer>
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
          </CardContainer>
        </Container>
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
