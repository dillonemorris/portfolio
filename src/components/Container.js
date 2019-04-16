import React from 'react'
import injectSheet from 'react-jss'

const Container = props => {
  return (
    <div
      className={props.classes.root}
      style={{
        maxWidth: 1080,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {props.children}
    </div>
  )
}

const styles = {
  root: {
    '@media (min-width: 600px)': {
      margin: '0px auto',
    },
  },
}

export default injectSheet(styles)(Container)
