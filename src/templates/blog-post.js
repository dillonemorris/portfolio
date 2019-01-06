import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Button from '../components/Button'
import injectSheet from 'react-jss'
import '../styles/fonts.css'

const BlogPost = ({ data, classes }) => {
  const post = data.markdownRemark
  return (
    <div style={{ backgroundColor: '#f4f4f4' }}>
      <Layout>
        <div className={classes.container}>
          <div className={classes.postDate}>
            {post.frontmatter.date} &bull; {post.timeToRead} min read
          </div>
          <h1 className={classes.postTitle}>{post.frontmatter.title}</h1>
          <div
            className={classes.postBody}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <Button
            color={'rgba(65,131,215,1)'}
            border={'3px solid rgba(65,131,215,1)'}
            boxShadow={'5px 5px rgba(65, 131, 215, 0.4)'}
            boxShadowHover={'5px 5px rgba(65, 131, 215, 1)'}
            padding={'10px 30px'}
            fontSize={14}
            text={'back to writing'}
            page={'/writing/'}
          />
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
  }
`

const styles = {
  container: {
    maxWidth: '650px',
    margin: '100px auto',
  },
  postDate: {
    color: '#606571',
    fontFamily:
      "Plex Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontSize: '14px',
    letterSpacing: '.5px',
    fontWeight: '200',
    paddingBottom: '4px',
  },
  postTitle: {
    color: '#414141',
  },
  postBody: {
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    color: '#414141',
    lineHeight: '1.6',
    paddingBottom: '40px',
  },
}

export default injectSheet(styles)(BlogPost)
