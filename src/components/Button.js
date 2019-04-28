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
      <Link to={page}>
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
    fontSize: props => (props.fontSize ? props.fontSize : 14),
    letterSpacing: '.8px',
    fontWeight: '600',
    background: '#fff',
    border: '3px solid #414141',
    boxShadow: props => (props.boxShadow ? props.boxShadow : 'none'),
    textDecoration: 'none',
    color: '#414141',
    transition: 'all 170ms ease-in-out',
    width: '100%',

    '@media (min-width: 600px)': {
      width: 'auto',
    },

    '&:hover': {
      boxShadow: props =>
        props.boxShadowHover ? props.boxShadowHover : 'none',
      cursor: 'pointer',
      border: props => (props.border ? props.border : 'none'),
      color: props => (props.color ? props.color : '#414141'),
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
