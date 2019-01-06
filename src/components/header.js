import React, { Component } from 'react'
import { Link } from 'gatsby'
import injectSheet from 'react-jss'
import '../styles/fonts.css'
import Logo from '../images/logo.png'
import noScroll from 'no-scroll'
import HeaderNavDesktop from './HeaderNavDesktop'
import HeaderNavMobile from './HeaderNavMobile'
import classNames from 'classnames'

class Header extends Component {
  state = {
    isMenuOpen: false,
  }

  onMenuOpen = () => {
    this.setState({ isMenuOpen: true })
    noScroll.on()
  }

  onMenuClose = () => {
    this.setState({ isMenuOpen: false })
    noScroll.off()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.inner}>
          <Link className={classes.link} to="/">
            <img
              className={classes.logo}
              src={Logo}
              alt={'Personal brand logo'}
            />
          </Link>
          <button onClick={this.onMenuOpen} className={classes.navMobileIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#414141"
            >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
          <HeaderNavDesktop className={classes.navDesktop} />
          <HeaderNavMobile
            className={classNames(
              classes.navMobile,
              this.state.isMenuOpen && classes.navMobileOpen
            )}
            onMenuClose={this.onMenuClose}
          />
        </div>
        <button
          onClick={this.onMenuClose}
          className={classNames(
            classes.navMobileUnderlay,
            this.state.isMenuOpen && classes.navMobileUnderlayOpen
          )}
        />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '70px',
    backgroundColor: '#fff',
    margin: '0 auto',
    color: '#414141',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
  },
  inner: {
    padding: '0px 1.0875rem 0rem',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1080px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: '40px',
    marginTop: '8px',
  },
  link: {
    width: 'inherit',
  },

  navDesktop: {
    display: 'none',

    '@media (min-width: 900px)': {
      display: 'flex',
    },
  },
  navMobileIcon: {
    color: '#2E2E35',
    display: 'inline-flex',
    backgroundColor: 'none',
    border: 'none',

    '&:focus': {
      outline: '1px solid #fff',
    },

    '@media (min-width: 900px)': {
      display: 'none',
    },
  },

  navMobile: {
    visibility: 'hidden',
    transform: 'translateX(100vw)',
    transition: 'all .5s ease',
  },

  navMobileOpen: {
    visibility: 'visible',
    transform: 'translateX(calc(100vw - 280px))',
  },

  navMobileUnderlay: {
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'fixed',
    visibility: 'hidden',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    zIndex: '5',
  },
  navMobileUnderlayOpen: {
    visibility: 'visible',
  },
}

export default injectSheet(styles)(Header)
