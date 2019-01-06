import React from 'react'
import injectSheet from 'react-jss'
import Button from '../components/Button'

const ProjectStandard = ({
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
      <div className={classes.projectContainer}>
        <img
          className={classes.screenshot}
          src={screenshot}
          alt={'screenshot of project'}
        />
      </div>
    </div>
  </a>
)

const styles = {
  wrapper: {
    display: 'flex',
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0px 1.0875rem 1.45rem',

    '@media (min-width: 900px)': {
      flexDirection: 'row',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '80px 0px',

    '@media (min-width: 900px)': {
      padding: '120px 0px',
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
      paddingLeft: '50px',
    },

    '&:hover': {
      cursor: 'pointer',
    },
  },
  title: {
    color: '#414141',
    fontWeight: '600',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontSize: '36px',
    paddingBottom: '10px',
    transition: 'all 170ms ease-in-out',
  },
  description: {
    color: '#606571',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    maxWidth: '800px',
    lineHeight: '30px',
    marginBottom: '40px',

    '@media (min-width: 900px)': {
      maxWidth: '800px',
    },
  },
  screenshot: {
    boxShadow:
      '0 16px 16px rgba(103,110,144,.05), 0 8px 8px rgba(103,110,144,.05), 0 4px 4px rgba(103,110,144,.05), 0 2px 2px rgba(103,110,144,.05)',
    transition: 'box-shadow .2s ease',
  },
  link: {
    textDecoration: 'none',
  },
}

export default injectSheet(styles)(ProjectStandard)
