import React from 'react'
import classNames from 'classnames'
import MyToggle from '../components/MyToggle'
import { useDarkMode } from '../components/hooks/useDarkMode'
import { graphql } from 'gatsby'
import Button from '../components/Button'
import injectSheet from 'react-jss'
import '../styles/fonts.css'
import SEO from '../components/seo'
import Container from '../components/Container'

const BlogPost = ({ data, classes }) => {
  const post = data.markdownRemark

  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <div
        className={classNames(
          darkMode ? classes.postBackgroundDark : classes.postBackgroundLight
        )}
      >
        <Container>
          <div className={classes.container}>
            <div className={classes.dateToggleContainer}>
              <div
                className={classNames(
                  classes.postDate,
                  darkMode ? classes.postDateDark : classes.postDateLight
                )}
              >
                {post.frontmatter.date} &bull; {post.timeToRead} min read
              </div>
              <MyToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            <h1
              className={classNames(
                classes.postTitle,
                darkMode ? classes.postTitleDark : classes.postTitleLight
              )}
            >
              {post.frontmatter.title}
            </h1>

            <div
              className={classNames(
                classes.postBody,
                darkMode ? classes.postTextDark : classes.postTextLight
              )}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <Button
              color={'#11181E'}
              border={'3px solid #c0c0ce'}
              padding={'10px 30px'}
              fontSize={14}
              text={'back to writing'}
              page={'/writing/'}
            />
          </div>
        </Container>
      </div>
    </>
  )
}

const styles = {
  container: {
    maxWidth: '650px',
    margin: '0 auto',
    padding: '50px 0',

    '@media (min-width: 900px)': {
      padding: '100px 0',
    },
  },
  postBackgroundLight: {
    backgroundColor: 'rgb(244, 244, 244)',
  },
  postBackgroundDark: {
    backgroundColor: '#25212d',
  },
  postDate: {
    fontFamily:
      "Plex Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontSize: '14px',
    letterSpacing: '.5px',
    fontWeight: '200',
    paddingBottom: '4px',
  },
  postDateLight: {
    color: '#606571',
  },
  postDateDark: {
    color: '#c0c0ce',
  },
  postBody: {
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    lineHeight: '1.6',
    paddingBottom: '40px',

    '& a': {
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'background 0.4s ease-out',

      '&:hover': {
        background: 'transparent',
      },
    },
  },
  postTextDark: {
    color: '#c0c0ce',

    '& h1': {
      color: '#fff',
    },
    '& h2': {
      color: '#fff',
    },
    '& h3': {
      color: '#fff',
    },
    '& h4': {
      color: '#fff',
    },

    '& a': {
      color: '#fff',
      fontWeight: '600',
      textDecoration: 'none',
      borderBottom: '2px solid #11181E',
      transition: 'background 0.4s ease-out',

      '&:hover': {
        background: '#11181E',
      },
    },
  },
  postTextLight: {
    color: '#11181E',

    '& a': {
      color: '#11181E',
      fontWeight: '600',
      textDecoration: 'none',
      borderBottom: '2px solid #bcd9ff',
      transition: 'background 0.4s ease-out',

      '&:hover': {
        background: '#bcd9ff',
      },
    },
  },

  postTitleDark: {
    color: '#fff',
  },
  postTitleLight: {
    color: '#11181E',
  },

  dateToggleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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

export default injectSheet(styles)(BlogPost)
