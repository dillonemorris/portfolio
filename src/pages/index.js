import React from 'react'
import injectSheet from 'react-jss'
import '../styles/fonts.css'
import Avatar from '../images/avatar.png'
import Button from '../components/Button'

import Layout from '../components/layout'

const IndexPage = ({ classes }) => (
  <div className={classes.wrapper}>
    <Layout>
      <div className={classes.container}>
        <img className={classes.avatar} src={Avatar} alt={'avatar'} />

        <h1 className={classes.myHeading}>Hey, I’m Dillon.</h1>
        <p className={classes.subHeading}>
          UI Designer & Developer from Phoenix, AZ.
        </p>
        <p className={classes.bodyText}>
          Currently working with some amazing people at{' '}
          <a
            className={classes.link}
            target="_blank"
            href={'https://www.elmstreettechnology.com'}
          >
            Elm Street Technology.
          </a>
        </p>
        <Button
          color={'rgba(65,131,215,1)'}
          border={'3px solid rgba(65,131,215,1)'}
          boxShadow={'5px 5px rgba(65, 131, 215, 0.4)'}
          boxShadowHover={'5px 5px rgba(65, 131, 215, 1)'}
          text={'more about me'}
          fontSize={14}
          page={'/about/'}
          padding={'10px 30px'}
        />
      </div>
    </Layout>
  </div>
)

const styles = {
  wrapper: {
    backgroundColor: '#f4f4f4',
  },
  container: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 210px)',
  },
  avatar: {
    width: '140px',
    paddingBottom: '15px',

    '@media (min-width: 600px)': {
      paddingBottom: '22px',
    },
  },
  emoji: {
    fontSize: '48px',
  },
  myHeading: {
    color: '#414141',
    fontWeight: '700',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    letterSpacing: '.8px',
    fontSize: '22px',
    lineHeight: '1.4',
    textAlign: 'center',

    '@media (min-width: 400px)': {
      fontSize: '28px',
    },

    '@media (min-width: 600px)': {
      fontSize: '36px',
    },
  },
  subHeading: {
    color: '#414141',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontWeight: '400',
    maxWidth: '800px',
    textAlign: 'center',
    lineHeight: '24px',
    marginBottom: '10px',
    letterSpacing: '.4px',
    fontSize: '16px',

    '@media (min-width: 600px)': {
      fontSize: '18px',
    },
  },
  bodyText: {
    color: '#414141',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    maxWidth: '800px',
    textAlign: 'center',
    lineHeight: '24px',
    marginBottom: '60px',
    letterSpacing: '.4px',
    fontSize: '16px',

    '@media (min-width: 600px)': {
      fontSize: '18px',
    },
  },
  link: {
    color: '#4183D7',
    textDecoration: 'none',
    borderBottom: '2px solid #e2e2e2',

    '&:hover': {
      transition: '250ms all',
      borderBottom: '2px solid #4183D7',
    },

    '@media (min-width: 600px)': {
      fontSize: '18px',
    },
  },
}

export default injectSheet(styles)(IndexPage)
