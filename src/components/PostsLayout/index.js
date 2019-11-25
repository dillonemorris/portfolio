import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
  Container,
  Background,
  H1,
  H2,
  Body,
  FontSettingsContainer,
} from './style'
import { Date } from '../BlogPostCard/style'
import FontSettings from '../FontSettings'
import Quote from '../Quote'
import CodeBlock from '../CodeBlock'

const fonts = {
  default:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  serif: 'PT Serif',
  mono: 'Space Mono',
}

const PostsLayout = ({ data: { mdx } }) => {
  const [largeFont, setLargeFont] = useLocalStorage(false)
  const [fontStyle, setFontStyle] = useLocalStorage(fonts.default)

  const components = {
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
    pre: ({ children }) => <CodeBlock children={children} />,
  }

  const { title, date } = mdx.frontmatter

  return (
    <MDXProvider components={components}>
      <Background>
        <Container>
          <H1 largeFont={largeFont} fontStyle={fontStyle}>
            {title}
          </H1>
          <Date fontStyle={fontStyle} className="hover-styles">
            {date} &bull; {mdx.timeToRead} min read
          </Date>
          <FontSettingsContainer>
            <FontSettings
              largeFont={largeFont}
              setLargeFont={setLargeFont}
              fonts={fonts}
              setFontStyle={setFontStyle}
            />
          </FontSettingsContainer>
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
      timeToRead
      body
      frontmatter {
        title
        date
      }
    }
  }
`

export default PostsLayout
