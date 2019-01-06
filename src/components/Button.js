import React from 'react'
import { Link } from 'gatsby'
import injectSheet from 'react-jss'

const Button = ({
  classes,
  text,
  fontSize,
  page,
  padding,
  boxShadow,
  boxShadowHover,
  border,
  color,
}) => {
  const internal = /^\/(?!\/)/.test(page)

  if (internal) {
    return (
      <Link style={{ fontSize: `${fontSize}px` }} to={page}>
        <button className={classes.button} style={{ padding: `${padding}` }}>
          {text}
        </button>
      </Link>
    )
  }
  return (
    <a
      target="_blank"
      style={{ fontSize: `${fontSize}px` }}
      href={page}
      rel="noopener noreferrer"
    >
      <button style={{ padding: `${padding}` }} className={classes.button}>
        {text}
      </button>
    </a>
  )
}

const styles = {
  button: {
    fontFamily: 'Plex mono',
    letterSpacing: '.8px',
    fontWeight: '600',
    background: '#fff',
    border: '3px solid #414141',
    boxShadow: props => props.boxShadow,
    textDecoration: 'none',
    color: '#414141',
    transition: 'all 170ms ease-in-out',

    '&:hover': {
      boxShadow: props => props.boxShadowHover,
      cursor: 'pointer',
      border: props => props.border,
      color: props => props.color,
    },

    '& a': {
      color: '#414141',
      textDecoration: 'none',
    },

    '& a:hover': {
      color: 'rgba(65,131,215,1)',
    },
  },
}

export default injectSheet(styles)(Button)
