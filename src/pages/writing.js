import React from 'react'
import { Link, graphql } from 'gatsby'
import WritingHeader from '../components/WritingHeader'
import BlogPostCard from '../components/BlogPostCard'
import styled from 'styled-components'
import Button from '../components/Button'
import SEO from '../components/seo'

const Container = styled.div`
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
  max-width: 1080px;

  @media (min-width: 600px) {
    margin: 0px auto;
  }
`

const HeaderContainer = styled.div`
  background-color: #fff;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const BlogPostGrid = styled.div`
  margin: 0px auto;
  max-width: 1080px;
  display: grid;
  grid-gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(340px, auto));
  padding: 60px 0px;
`

const StyledButton = styled(Button)`
  font-family: Plex mono;
  font-size: 14px;
  letter-spacing: 0.8px;
  font-weight: 600;
  background: #fff;
  border: 3px solid #11181e;
  box-shadow: 5px 5px rgba(65, 131, 215, 0.4);
  padding: 10px 30px;
  text-decoration: none;
  color: #11181e;
  transition: all 170ms ease-in-out;
  width: 100%;

  @media (min-width: 600px) {
    width: auto;
  }

  :hover {
    box-shadow: 5px 5px rgba(65, 131, 215, 1);
    cursor: pointer;
    border: 3px solid rgba(65, 131, 215, 1);
    color: rgba(65, 131, 215, 1);
  }
`

const writing = ({ data }) => {
  return (
    <>
      <SEO title="Writing" />
      <div style={{ backgroundColor: '#f4f4f4' }}>
        <Container>
          <HeaderContainer>
            <WritingHeader />
          </HeaderContainer>
          <BlogPostGrid>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <Link style={{ textDecoration: 'none' }} to={node.fields.slug}>
                  <BlogPostCard
                    timeToRead={node.timeToRead}
                    date={node.frontmatter.date}
                    title={node.frontmatter.title}
                    excerpt={node.frontmatter.excerpt}
                  />
                  <StyledButton text={'read more'} page={node.fields.slug} />
                </Link>
              </div>
            ))}
          </BlogPostGrid>
        </Container>
      </div>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
      totalCount
      edges {
        node {
          timeToRead
          id
          frontmatter {
            title
            date
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

export default writing
