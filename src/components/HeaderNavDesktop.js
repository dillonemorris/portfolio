import React, { Component } from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'
import { Link } from 'gatsby'
class HeaderNavDesktop extends Component {
  render() {
    const { classes, className } = this.props
    return (
      <nav className={classNames(classes.nav, className)}>
        <Link
          activeClassName={classes.linkActive}
          className={classes.link}
          to="/projects/"
        >
          Projects
        </Link>
        <Link
          activeClassName={classes.linkActive}
          className={classes.link}
          to="/writing/"
        >
          Writing
        </Link>
        <Link
          activeClassName={classes.linkActive}
          className={classes.link}
          to="/library/"
        >
          Library
        </Link>
        <Link
          activeClassName={classes.linkActive}
          className={classes.link}
          to="/about/"
        >
          About
        </Link>
      </nav>
    )
  }
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '8px',
  },

  link: {
    display: 'flex',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '400',
    color: '#11181E',
    paddingLeft: '60px',
    letterSpacing: '.3px',

    '&:hover': {
      cursor: 'pointer',
      color: '#4183D7',
      transition: 'all 170ms ease-in-out',
    },
  },

  linkActive: {
    color: '#4183D7',
  },
}

export default injectSheet(styles)(HeaderNavDesktop)
