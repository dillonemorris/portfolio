import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Button from '../components/Button'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div style={{ backgroundColor: '#f4f4f4' }}>
      <Layout>
        <div
          style={{
            maxWidth: '650px',
            margin: '100px auto',
          }}
        >
          <div
            style={{
              color: '#606571',
              fontFamily: 'Plex Mono',
              fontSize: '14px',
              letterSpacing: '.5px',
              fontWeight: '200',
              paddingBottom: '4px',
            }}
          >
            {post.frontmatter.date} &bull; {post.timeToRead} min read
          </div>
          <h1 style={{ color: '#414141' }}>{post.frontmatter.title}</h1>
          <div
            style={{
              fontFamily: 'Inter UI',
              color: '#414141',
              lineHeight: '1.6',
              paddingBottom: '40px',
            }}
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

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       timeToRead
//       frontmatter {
//         title
//         date
//       }
//     }
//   }
// `
