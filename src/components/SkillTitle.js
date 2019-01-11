import React from 'react'
import injectSheet from 'react-jss'

const SkillTitle = ({ classes, title }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>{title}</div>
    </div>
  )
}

const styles = {
  root: {
    display: 'flex',
  },
  title: {
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontSize: '21px',
    fontWeight: '500',
    paddingBottom: '20px',
    letterSpacing: '.5px',
    color: '#414141',
  },
}

export default injectSheet(styles)(SkillTitle)
