import React from 'react'
import injectSheet from 'react-jss'

const LibraryHeader = ({ classes }) => (
  <div className={classes.container}>
    <h1 className={classes.myHeading}>Library</h1>
    <p className={classes.subHeading}>
      An updated list of books and resources I highly recommend.
    </p>
  </div>
)

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
  },
  icon: {
    fill: '#414141',
    width: '140px',
  },
  myHeading: {
    color: '#414141',
    fontWeight: '600',
    fontFamily:
      "Inter UI -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    letterSpacing: '1px',
    marginTop: '24px',
    marginBottom: '12px',
    fontSize: '36px',

    '@media (min-width: 700px)': {
      fontSize: '48px',
    },
  },
  subHeading: {
    color: '#606571',
    fontSize: '18px',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontWeight: '300',
    textAlign: 'center',
    lineHeight: '24px',
    marginBottom: '10px',
    letterSpacing: '.8px',
    maxWidth: '340px',
  },
}

export default injectSheet(styles)(LibraryHeader)
