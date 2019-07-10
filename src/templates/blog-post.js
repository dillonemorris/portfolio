import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import '../styles/fonts.css'
import SEO from '../components/seo'
import MyToggle from '../components/MyToggle'
import Button from '../components/Button'
import { useDarkMode } from '../components/hooks/useDarkMode'

const Container = styled.div`
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
  max-width: 1080px;

  @media (min-width: 600px) {
    margin: 0px auto;
  }
`

const PostBackground = styled.div`
  background-color: ${props =>
    props.darkMode ? '#25212d' : 'rgb(244, 244, 244)'};
`

const Wrapper = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 50px 0;

  @media (min-width: 900px) {
    padding: 100px 0;
  }
`

const DateToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PostDate = styled.div`
  font-family: Plex Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif !important;
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: 200;
  padding-bottom: 4px;
  color: ${props => (props.darkMode ? '#c0c0ce' : '#486581')};
`

const PostTitle = styled.h1`
  color: ${props => (props.darkMode ? '#fff' : '#11181E')};
`

const PostBody = styled.div`
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  line-height: 1.6;
  padding-bottom: 40px;
  font-size: 21px;
  color: ${props => (props.darkMode ? '#c0c0ce' : '#486581')};
  & h1,
  h2,
  h3,
  h4 {
    color: ${props => (props.darkMode ? '#fff' : '#11181E')};
  }

  & a {
    font-weight: 600;
    text-decoration: none;
    transition: background 0.4s ease-out;
    border-bottom: 2px solid #bcd9ff;
    color: ${props => (props.darkMode ? '#fff' : '#11181E')};

    :hover {
      background: #bcd9ff;
    }
  }
`

const StyledButton = styled(Button)`
  font-family: Plex mono;
  font-size: 14px;
  letter-spacing: 0.8px;
  font-weight: 600;
  background: ${props => (props.darkMode ? '#11181E' : '#fff')};
  border: 3px solid ${props => (props.darkMode ? '#c0c0ce' : '#11181E')};
  box-shadow: 5px 5px
    ${props => (props.darkMode ? '#5c5c6b' : 'rgba(65, 131, 215, 0.4)')};
  padding: 10px 30px;
  text-decoration: none;
  color: ${props => (props.darkMode ? '#c0c0ce' : '#11181E')};
  transition: all 170ms ease-in-out;
  width: 100%;

  @media (min-width: 600px) {
    width: auto;
  }

  :hover {
    box-shadow: 5px 5px
      ${props => (props.darkMode ? '#fff' : 'rgba(65, 131, 215, 1)')};
    cursor: pointer;
    border: 3px solid
      ${props => (props.darkMode ? '#fff' : 'rgba(65, 131, 215, 1)')};
    color: ${props => (props.darkMode ? '#fff' : 'rgba(65, 131, 215, 1)')};
  }
`

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <PostBackground darkMode={darkMode}>
        <Container>
          <Wrapper>
            <DateToggle>
              <PostDate darkMode={darkMode}>
                {post.frontmatter.date} &bull; {post.timeToRead} min read
              </PostDate>
              <MyToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </DateToggle>
            <PostTitle darkMode={darkMode}>{post.frontmatter.title}</PostTitle>

            <PostBody
              darkMode={darkMode}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <StyledButton
              darkMode={darkMode}
              text={'back to writing'}
              page={'/writing/'}
            />
          </Wrapper>
        </Container>
      </PostBackground>
    </>
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

export default BlogPost
