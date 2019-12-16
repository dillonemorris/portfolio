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
  DateContainer,
  Quote,
  Date,
} from './style'
import FontSettings from '../FontSettings'
import { Link } from '../globals'
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
    a: ({ children, href }) => <Link text={children} page={href} />,
  }

  const { title, date } = mdx.frontmatter

  return (
    <MDXProvider components={components}>
      <Background>
        <Container>
          <FontSettingsContainer>
            <FontSettings
              largeFont={largeFont}
              setLargeFont={setLargeFont}
              fontStyle={fontStyle}
              setFontStyle={setFontStyle}
              fonts={fonts}
            />
          </FontSettingsContainer>
          <H1 largeFont={largeFont} fontStyle={fontStyle}>
            {title}
          </H1>
          <DateContainer>
            <Date fontStyle={fontStyle} className="hover-styles">
              {date} &bull; {mdx.timeToRead} min read
            </Date>
          </DateContainer>

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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default PostsLayout
