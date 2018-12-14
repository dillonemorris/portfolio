import React from 'react'
import injectSheet from 'react-jss'
import Button from './Button'
import pattern from '../images/pattern.svg'

const AboutClosing = ({ classes }) => (
  <div className={classes.patternBg}>
    <div className={classes.container}>
      <div className={classes.closing}>
        <h1 className={classes.myHeading}>Other stuff</h1>
        <div className={classes.closingContainer}>
          <p>Feel free to check out some of my personal projects.</p>
          <Button
            color={'rgba(65,131,215,1)'}
            border={'3px solid rgba(65,131,215,1)'}
            boxShadow={'5px 5px rgba(65, 131, 215, 0.4)'}
            boxShadowHover={'5px 5px rgba(65, 131, 215, 1)'}
            text={'projects'}
            fontSize={14}
            page={'/projects/'}
            padding={'6px 20px'}
          />
        </div>
        <div className={classes.closingContainer}>
          <p>
            I also like to get my thoughts down on "paper" every once in a
            while.
          </p>
          <Button
            color={'rgba(65,131,215,1)'}
            border={'3px solid rgba(65,131,215,1)'}
            boxShadow={'5px 5px rgba(65, 131, 215, 0.4)'}
            boxShadowHover={'5px 5px rgba(65, 131, 215, 1)'}
            text={'writing'}
            fontSize={14}
            page={'/writing/'}
            padding={'6px 20px'}
          />
        </div>
        <div className={classes.closingContainer}>
          <p>
            Drop me a line if you want to chat, work together, or see more of my
            work.
          </p>
          <a className={classes.link} href="mailto:dillonmorris91@gmail.com">
            dillonmorris91@gmail.com
          </a>
        </div>
      </div>
    </div>
  </div>
)

const styles = {
  myHeading: {
    color: '#414141',
    fontWeight: '500',
    fontFamily: 'Inter UI',
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
    fontFamily: 'Inter UI',
    lineHeight: '1.5',
    padding: '80px 0px 0px',
  },
  closingContainer: {
    paddingBottom: '60px',
  },
  link: {
    color: '#4183D7',
    textDecoration: 'none',
    borderBottom: '2px solid #ededed',

    '&:hover': {
      transition: '250ms all',
      borderBottom: '2px solid #4183D7',
    },
  },
}

export default injectSheet(styles)(AboutClosing)
