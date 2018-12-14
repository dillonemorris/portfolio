import React from 'react'
import injectSheet from 'react-jss'

const BlogPostCard = ({ classes, date, title, excerpt, timeToRead }) => (
  <div className={classes.container}>
    <div className={classes.date}>
      {date} &bull; {timeToRead} min read
    </div>
    <div className={classes.title}>{title}</div>
    <div className={classes.excerpt}>{excerpt}</div>
  </div>
)

const styles = {
  container: {
    '&:hover $date': {
      color: 'rgba(65,131,215,1)',
      transitionDelay: '0s, 0s, .3s',
    },
    '&:hover $title': {
      color: 'rgba(65,131,215,1)',
      transitionDelay: '0s, 0s, .3s',
    },
  },
  date: {
    color: '#606571',
    fontFamily: 'Plex Mono',
    fontSize: '13px',
    letterSpacing: '.5px',
    fontWeight: '200',
    paddingBottom: '4px',
  },
  title: {
    fontFamily: 'Inter UI',
    fontSize: '26px',
    fontWeight: '600',
    color: '#414141',
    letterSpacing: '.2px',
    paddingBottom: '20px',
    lineHeight: '36px',
    transition: 'all 170ms ease-in-out',
  },
  excerpt: {
    fontFamily: 'Inter UI',
    color: '#606571',
    fontSize: '16px',
    letterSpacing: '.4px',
    paddingBottom: '30px',
    lineHeight: '1.6',
  },
}

export default injectSheet(styles)(BlogPostCard)
