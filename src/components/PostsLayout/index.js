import React, { useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Background, H1, H2, Body } from './styles'
import Quote from '../Quote'

const fonts = {
  serif: 'PT Serif',
  mono: 'Space Mono',
}

const PostsLayout = ({ data: { mdx } }) => {
  const [largeFont, setLargeFont] = useLocalStorage(false)
  const [fontStyle, setFontStyle] = useLocalStorage(null)

  const { title } = mdx.frontmatter

  return (
    <MDXProvider
      components={{
        h2: ({ children }) => (
          <H2 largeFont={largeFont} fontStyle={fontStyle}>
            {children}
          </H2>
        ),
        p: ({ children }) => (
          <Body largeFont={largeFont} fontStyle={fontStyle}>
            {children}
          </Body>
        ),
        blockquote: ({ children }) => <Quote>{children}</Quote>,
      }}
    >
      <Background>
        <Container>
          <div>
            <button onClick={() => setFontStyle(null)}>default</button>
            <button onClick={() => setFontStyle(fonts.serif)}>serif</button>
            <button onClick={() => setFontStyle(fonts.mono)}>mono</button>
          </div>
          <div>
            <button onClick={() => setLargeFont(false)}>small</button>
            <button onClick={() => setLargeFont(true)}>large</button>
          </div>
          <H1 largeFont={largeFont} fontStyle={fontStyle}>
            {title}
          </H1>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Container>
      </Background>
    </MDXProvider>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default PostsLayout
