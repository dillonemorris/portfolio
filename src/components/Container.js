import React from 'react'

const Container = props => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1080,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {props.children}
    </div>
  )
}

export default Container
