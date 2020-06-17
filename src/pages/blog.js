import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Link, graphql } from 'gatsby'
import BlogPostCard from '../components/BlogPostCard'
import SEO from '../components/seo'

import Blog from '../icons/Blog'

import {
  BlogHeading,
  SectionHeading,
  IconContainer,
  HeadingContainer,
  BlogCardContainer,
} from '../styles/page-styles/home-page-styles'

import { H3, Background } from '../components/globals'

const Container = styled.div`
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
  max-width: 42rem;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    margin: 0px auto;
  }
`

const HeaderContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing._16};
`

const BlogPage = ({ data }) => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <SEO title="Blog" />
      <Background color={theme.colors.background}>
        <Container>
          <HeaderContainer>
            <BlogHeading>
              <SectionHeading>
                <IconContainer>
                  <Blog color={theme.colors.body} />
                </IconContainer>
                <HeadingContainer>
                  <H3>Blog</H3>
                </HeadingContainer>
              </SectionHeading>
            </BlogHeading>
          </HeaderContainer>
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
        </Container>
      </Background>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

export default BlogPage
