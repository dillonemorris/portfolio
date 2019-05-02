import React from 'react'
import injectSheet from 'react-jss'

const Resource = ({ classes, title, category, link, image }) => (
  <div className={classes.wrapper}>
    <div className={classes.cardImageWrapper}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          className={classes.cardImage}
          style={{ width: '100%' }}
          src={image}
          alt="Resource logo"
        />
      </a>
    </div>
    <div className={classes.titleCategory}>
      <a
        className={classes.title}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>{' '}
      <span className={classes.category}>{category}</span>
    </div>
  </div>
)

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    letterSpacing: '.35px',
    paddingBottom: '14px',
    lineHeight: '1.5',

    '@media (min-width: 600px)': {
      paddingBottom: '18px',
    },

    '&:hover $title': {
      color: 'rgba(65,131,215,1)',
      transitionDelay: '0s, 0s, .3s',
    },
    '&:hover $category': {
      color: 'rgba(65,131,215,1)',
      transitionDelay: '0s, 0s, .3s',
    },
  },
  titleCategory: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '4px',
  },
  title: {
    display: 'flex',
    color: '#11181E',
    fontSize: '21px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'color 0.15s ease-out',

    '@media (min-width: 600px)': {
      fontSize: '22px',
    },

    '&:hover': {
      color: '#4183D7',
    },
  },
  category: {
    color: '#606571',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '.8px',
  },
  cardImageWrapper: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  cardImage: {
    height: '240px',
    boxShadow:
      '0 16px 16px rgba(103,110,144,.05), 0 8px 8px rgba(103,110,144,.05), 0 4px 4px rgba(103,110,144,.05), 0 2px 2px rgba(103,110,144,.05)',
  },
}

export default injectSheet(styles)(Resource)
