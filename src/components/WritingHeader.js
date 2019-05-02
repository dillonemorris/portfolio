import React from 'react'
import injectSheet from 'react-jss'

const WritingHeader = ({ classes }) => (
  <div className={classes.container}>
    <h1 className={classes.myHeading}>Writing</h1>
    <p className={classes.subHeading}>
      My thoughts on career development, design, and more
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
    fill: '#11181E',
    width: '140px',
  },
  myHeading: {
    color: '#11181E',
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
    letterSpacing: '.7px',
    maxWidth: '340px',
  },
}

export default injectSheet(styles)(WritingHeader)
