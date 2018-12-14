import React from 'react'
import injectSheet from 'react-jss'

const Article = ({ classes, title, author, link }) => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <a
        className={classes.link}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>{' '}
      <span className={classes.author}>by {author}</span>
    </div>
  </div>
)

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: 'Inter UI',
    letterSpacing: '.35px',
    fontSize: '18px',
    paddingBottom: '14px',
    lineHeight: '1.5',

    '@media (min-width: 600px)': {
      fontSize: '21px',
      paddingBottom: '18px',
    },
  },
  link: {
    color: '#4183D7',
    textDecoration: 'none',
    borderBottom: '2px solid #ededed',

    '&:hover': {
      transition: '250ms all',
      borderBottom: '2px solid #4183D7',
    },
  },
  author: {
    color: '#606571',
  },
}

export default injectSheet(styles)(Article)
