import React, { Fragment } from 'react'
import SEO from '../components/seo'
import Container from '../components/Container'
import Button from '../components/Button'
import Error from '../images/Error'
import injectSheet from 'react-jss'

const NotFoundPage = ({ classes }) => (
  <Fragment>
    <SEO title="404 - Not Found" />
    <Container>
      <div className={classes.container}>
        <Error />
        <h1 className={classes.myHeading}>Woah!</h1>
        <p className={classes.body}>
          Looks like you're doing a bit of off-roading there...
        </p>
        <Button
          color={'rgba(218, 162, 176,1)'}
          border={'3px solid rgba(218, 162, 176,1)'}
          boxShadow={'5px 5px rgba(218, 162, 176, 0.4)'}
          boxShadowHover={'5px 5px rgba(218, 162, 176, 1)'}
          text={'go back'}
          fontSize={14}
          page={'/projects/'}
          padding={'6px 20px'}
        />
      </div>
    </Container>
  </Fragment>
)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '40px auto 20px',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
  },
  myHeading: {
    paddingTop: '32px',
    color: '#414141',
    marginBottom: '12px',
    fontSize: '36px',

    '@media (min-width: 700px)': {
      fontSize: '48px',
    },
  },
  body: {
    color: '#606571',
    fontSize: '20px',
  },
}

export default injectSheet(styles)(NotFoundPage)
