import React from 'react'
import injectSheet from 'react-jss'
import ReactCardFlipper from 'react-card-flipper'
import Button from '../components/Button'

const Resource = ({ classes, title, category, link }) => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <a className={classes.link} href={link} target="_blank">
        {title}
      </a>{' '}
      <span className={classes.category}>- {category}</span>
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
    borderBottom: '2px solid #e2e2e2',

    '&:hover': {
      transition: '250ms all',
      borderBottom: '2px solid #4183D7',
    },
  },
  category: {
    color: '#606571',
  },
}

export default injectSheet(styles)(Resource)
