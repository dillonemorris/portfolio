import React from 'react'
import injectSheet from 'react-jss'
import Button from '../components/Button'

const ProjectInverted = ({
  classes,
  title,
  description,
  screenshot,
  btnText,
  color,
  page,
  boxShadow,
  boxShadowHover,
  border,
}) => (
  <a
    className={classes.link}
    href={page}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={classes.wrapper}>
      <div className={classes.projectContainer}>
        <img
          className={classes.screenshot}
          src={screenshot}
          alt={'screenshot of project'}
        />
      </div>
      <div className={classes.container}>
        <h1 style={{ color }} className={classes.title}>
          {title}
        </h1>
        <p className={classes.description}>{description}</p>
        <Button
          boxShadow={boxShadow}
          boxShadowHover={boxShadowHover}
          border={border}
          color={color}
          padding={'10px 30px'}
          text={btnText}
          fontSize={14}
          page={page}
        />
      </div>
    </div>
  </a>
)

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '@media (min-width: 900px)': {
      flexDirection: 'row',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '40px 0px',
    order: '-1',

    '@media (min-width: 900px)': {
      padding: '120px 0px',
      order: '1',
    },

    '&:hover': {
      cursor: 'pointer',
    },
  },
  projectContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: '40px',

    '@media (min-width: 900px)': {
      padding: '80px 0px',
      maxWidth: '50%',
      paddingRight: '50px',
    },

    '&:hover': {
      cursor: 'pointer',
    },
  },
  avatar: {
    width: '140px',
    paddingBottom: '40px',
  },
  title: {
    fontWeight: '600',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontSize: '36px',
    transition: 'all 170ms ease-in-out',
    paddingBottom: '0px',

    '@media (min-width: 900px)': {
      paddingBottom: '10px',
    },
  },
  description: {
    color: '#606571',
    fontSize: '18px',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    maxWidth: '800px',
    lineHeight: '26px',
    marginBottom: '20px',

    '@media (min-width: 900px)': {
      marginBottom: '40px',
      lineHeight: '30px',
      maxWidth: '800px',
    },
  },
  link: {
    color: '#4183D7',
    fontSize: '18px',
    textDecoration: 'none',

    '&:hover': {
      borderBottom: '2px solid rgba(96, 101, 113, .2)',
      transition: 'all 200ms ease-in-out',
    },
  },
  screenshot: {
    boxShadow:
      '0 16px 16px rgba(103,110,144,.05), 0 8px 8px rgba(103,110,144,.05), 0 4px 4px rgba(103,110,144,.05), 0 2px 2px rgba(103,110,144,.05)',
    transition: 'box-shadow .2s ease',
  },
}

export default injectSheet(styles)(ProjectInverted)
