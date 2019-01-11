import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import WritingHeader from '../components/WritingHeader'
import BlogPostCard from '../components/BlogPostCard'
import Button from '../components/Button'

export default ({ data }) => {
  return (
    <div style={{ backgroundColor: '#f4f4f4' }}>
      <Layout>
        <div
          style={{
            backgroundColor: '#fff',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
          }}
        >
          <WritingHeader />
        </div>
        <div
          style={{
            margin: '0px auto',
            maxWidth: '1080px',
            display: 'grid',
            gridGap: '100px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, auto))',
            padding: '120px 0px',
          }}
        >
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link style={{ textDecoration: 'none' }} to={node.fields.slug}>
                <BlogPostCard
                  timeToRead={node.timeToRead}
                  date={node.frontmatter.date}
                  title={node.frontmatter.title}
                  excerpt={node.frontmatter.excerpt}
                />
                <Button
                  color={'rgba(65,131,215,1)'}
                  border={'3px solid rgba(65,131,215,1)'}
                  boxShadow={'5px 5px rgba(65, 131, 215, 0.4)'}
                  boxShadowHover={'5px 5px rgba(65, 131, 215, 1)'}
                  padding={'10px 30px'}
                  fontSize={14}
                  text={'read more'}
                  page={node.fields.slug}
                />
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </div>
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
