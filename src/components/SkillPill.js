import React from 'react'
import injectSheet from 'react-jss'

const SkillPill = ({ classes, text }) => (
  <div className={classes.container}>
    <div>{text}</div>
  </div>
)

const styles = {
  container: {
    fontFamily:
      "Plex Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontWeight: '300',
    fontSize: '14px',
    color: '#4183D7',
    backgroundColor: '#fff',
    padding: '8px 24px',
    borderRadius: '32px',
    textAlign: 'center',
    marginRight: '20px',
    marginBottom: '20px',
    boxShadow:
      '0 16px 16px rgba(103,110,144,.05), 0 8px 8px rgba(103,110,144,.05), 0 4px 4px rgba(103,110,144,.05), 0 2px 2px rgba(103,110,144,.05)',
  },
}

export default injectSheet(styles)(SkillPill)
