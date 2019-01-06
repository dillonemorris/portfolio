import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import injectSheet from 'react-jss'

const HeaderNavMobile = ({ classes, className, onMenuClose }) => {
  return (
    <nav className={classNames(classes.nav, className)}>
      <div className={classes.topNav}>
        <button onClick={onMenuClose} className={classes.navMobileIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#414141"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>
      <Link onClick={onMenuClose} className={classes.link} to="/projects/">
        Projects
      </Link>
      <Link onClick={onMenuClose} className={classes.link} to="/writing/">
        Writing
      </Link>
      <Link onClick={onMenuClose} className={classes.link} to="/library/">
        Library
      </Link>
      <Link onClick={onMenuClose} className={classes.link} to="/about/">
        About
      </Link>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '280px',
    width: '100%',
    paddingTop: '80px',
    paddingBottom: '30px',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: '#FFF',
    zIndex: '9999999',
    overflowY: 'scroll',
    boxShadow: '0 1px 3px 0 rgba(0,0,0,.1), 0 5px 20px 0 rgba(0,0,0,.2)',
  },
  topNav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navMobileIcon: {
    position: 'fixed',
    display: 'inline-flex',
    top: '26px',
    right: '26px',
    zIndex: '1',
    backgroundColor: 'none',
    border: 'none',

    '&:focus': {
      outline: '1px solid #fff',
    },
  },

  link: {
    fontFamily: 'Plex mono',
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    fontWeight: '600',
    paddingLeft: '20px',
    padding: '1.4rem',
    fontSize: '24px',

    '&:hover': {
      cursor: 'pointer',
      color: '#4183D7',
      transition: 'all 170ms ease-in-out',
    },
  },
}

export default injectSheet(styles)(HeaderNavMobile)
