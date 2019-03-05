import React from 'react'
import injectSheet from 'react-jss'
import Button from './Button'
import pattern from '../images/pattern.svg'

const AboutClosing = ({ classes }) => (
  <div className={classes.patternBg}>
    <div className={classes.container}>
      <div className={classes.closing}>
        <h1 className={classes.myHeading}>Contact</h1>
        <div className={classes.closingContainer}>
          <p className={classes.description}>
            Drop me a line if you want to chat, work together, or see more of my
            work.
          </p>
          <a className={classes.link} href="mailto:dillonmorris91@gmail.com">
            <svg
              style={{ marginRight: '4px' }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#414141"
            >
              <path
                className="heroicon-ui"
                d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"
              />
            </svg>
            dillonmorris91@gmail.com
          </a>
        </div>
        <div className={classes.closingContainer}>
          <p className={classes.description}>Side projects are everything!</p>
          <Button
            color={'rgba(208, 91, 121,1)'}
            border={'3px solid rgba(208, 91, 121,1)'}
            boxShadow={'5px 5px rgba(208, 91, 121, 0.4)'}
            boxShadowHover={'5px 5px rgba(208, 91, 121, 1)'}
            text={'projects'}
            fontSize={14}
            page={'/projects/'}
            padding={'6px 20px'}
          />
        </div>
        <div className={classes.closingContainer}>
          <p className={classes.description}>
            This page should really be called "typing"{' '}
            <span role="img" aria-label="don't tell">
              🤫
            </span>
          </p>
          <Button
            color={'rgba(130, 105, 200,1)'}
            border={'3px solid rgba(130, 105, 200,1)'}
            boxShadow={'5px 5px rgba(130, 105, 200, 0.4)'}
            boxShadowHover={'5px 5px rgba(130, 105, 200, 1)'}
            text={'writing'}
            fontSize={14}
            page={'/writing/'}
            padding={'6px 20px'}
          />
        </div>
        <div className={classes.closingContainer}>
          <p className={classes.description}>Learning is fun!</p>
          <Button
            color={'rgba(61, 118, 113, 1)'}
            border={'3px solid rgba(61, 118, 113, 1)'}
            boxShadowHover={'5px 5px rgba(61, 118, 113, 1)'}
            boxShadow={'5px 5px rgba(61, 118, 113, .4)'}
            text={'library'}
            fontSize={14}
            page={'/library/'}
            padding={'6px 20px'}
          />
        </div>
      </div>
    </div>
  </div>
)

const styles = {
  myHeading: {
    color: '#414141',
    fontWeight: '500',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontSize: '32px',
    letterSpacing: '.3px',

    '@media (min-width: 700px)': {
      fontSize: '40px',
    },
  },
  patternBg: {
    backgroundImage: `url('${pattern}')`,
    backgroundColor: '#fff',
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '0px auto',
    maxWidth: '1080px',
    padding: '0px 1.0875rem 0rem',
  },
  closing: {
    display: 'flex',
    flexDirection: 'column',
    color: '#606571',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    lineHeight: '1.5',
    padding: '80px 0px 0px',
  },
  closingContainer: {
    paddingBottom: '48px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '250px',
    color: '#414141',
    fontWeight: '600',
    textDecoration: 'none',
    borderBottom: '2px solid #bcd9ff',
    transition: 'background 0.4s ease-out',

    '&:hover': {
      background: '#bcd9ff',
    },
  },
  description: {
    fontSize: '20px',
    paddingBottom: '10px',
    marginBottom: '0px',
  },
}

export default injectSheet(styles)(AboutClosing)
