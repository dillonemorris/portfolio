import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
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
  OL,
  StyledLink,
  FontSettingsContainer,
  DateContainer,
  Quote,
  Date,
  Pagination,
  NextLink,
  PreviousLink,
  LinkContainer,
  LeftArrow,
} from './style'
import FontSettings from '../FontSettings'
import { Link as MyLink } from '../globals'
import CodeBlock from '../CodeBlock'
import Arrow from '../../icons/Arrow'

const fonts = {
  default:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  serif: 'PT Serif',
  mono: 'Space Mono',
}

const PostsLayout = ({ pageContext, data }) => {
  const [largeFont, setLargeFont] = useLocalStorage(false)
  const [fontStyle, setFontStyle] = useLocalStorage(fonts.default)

  const theme = useContext(ThemeContext)

  const { mdx } = data
  const { previous, next } = pageContext

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
    a: ({ children, href }) => (
      <StyledLink largeFont={largeFont} text={children} page={href} />
    ),
    ol: ({ children }) => (
      <OL largeFont={largeFont} fontStyle={fontStyle}>
        {children}
      </OL>
    ),
    ul: ({ children }) => (
      <Body largeFont={largeFont} fontStyle={fontStyle}>
        {children}
      </Body>
    ),
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
          <Pagination>
            {previous && (
              <LinkContainer marginLeftAuto={!previous}>
                <LeftArrow color={theme.colors.primaryLink} />
                <PreviousLink to={previous.fields.slug}>
                  {previous.frontmatter.title}
                </PreviousLink>
              </LinkContainer>
            )}
            {next && (
              <LinkContainer marginLeftAuto={!previous}>
                <NextLink to={next.fields.slug}>
                  {next.frontmatter.title}
                </NextLink>
                <Arrow color={theme.colors.primaryLink} />
              </LinkContainer>
            )}
          </Pagination>
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
