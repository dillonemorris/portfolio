import React from 'react'
import injectSheet from 'react-jss'
import '../styles/fonts.css'

const Footer = ({ classes }) => (
  <div className={classes.container}>
    <div className={classes.inner}>
      <div className={classes.left}>
        <div>
          Designed and coded with{' '}
          <span aria-label="heart" role="img">
            🖤
          </span>
        </div>
        <a
          href={'https://github.com/dillonmorris91/portfolio'}
          target={'_blank'}
          rel="noopener noreferrer"
          className={classes.codeLink}
        >
          View source code
        </a>
      </div>
      <div className={classes.socialContainer}>
        <div className={classes.socialLink}>
          <a
            className={classes.link}
            href={'https://github.com/dillonmorris91'}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <svg
              className={classes.socialIcon}
              fill={'#414141'}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub icon</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
        <div className={classes.socialLink}>
          <a
            className={classes.link}
            href={'https://dribbble.com/dillonmorris'}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <svg
              className={classes.socialIcon}
              fill={'#414141'}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Dribbble icon</title>
              <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
            </svg>
          </a>
        </div>
        <div className={classes.socialLink}>
          <a
            className={classes.link}
            href={'https://www.linkedin.com/in/dillonmorrisdev/'}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <svg
              className={classes.socialIcon}
              fill={'#414141'}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn icon</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
        <div className={classes.socialLink}>
          <a
            className={classes.link}
            href={'https://twitter.com/ThisIsDillon'}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <svg
              className={classes.socialIcon}
              fill={'#414141'}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter icon</title>
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
)

const styles = {
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '110px',
    backgroundColor: '#fff',
    margin: '0 auto',
    color: '#414141',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
  },
  inner: {
    maxWidth: '1080px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '@media (min-width: 600px)': {
      width: '100%',
      flexDirection: 'row',
      padding: '0px 1.0875rem 0px',
      justifyContent: 'space-between',
    },
  },
  link: {
    color: '#414141',
    fontSize: '13px',
    textDecoration: 'none',
  },
  left: {
    fontFamily:
      "Plex Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    letterSpacing: '.5px',
    fontSize: '14px',
    paddingTop: '10px',
    fontWeight: '300',
    order: 2,
    textAlign: 'center',

    '@media (min-width: 600px)': {
      fontSize: '13px',
      paddingTop: '0px',
      order: 1,
      textAlign: 'left',
    },
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    order: 1,
    width: '180px',
    paddingTop: '16px',

    '@media (min-width: 600px)': {
      fontSize: '14px',
      paddingTop: '0px',
      order: 1,
      textAlign: 'left',
    },
  },
  socialLink: {
    width: '20px',
  },
  socialIcon: {
    '&:hover': {
      cursor: 'pointer',
      fill: '#4183D7',
      transition: 'all 170ms ease-in-out',
    },
  },
  codeLink: {
    color: '#4183D7',
    textDecoration: 'none',

    '&:hover': {
      cursor: 'pointer',
      transition: 'all 200ms ease-in-out',
    },
  },
}

export default injectSheet(styles)(Footer)
