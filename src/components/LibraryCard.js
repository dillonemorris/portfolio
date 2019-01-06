import React from 'react'
import injectSheet from 'react-jss'
import ReactCardFlipper from 'react-card-flipper'
import Button from '../components/Button'

const LibraryCard = ({ classes, title, author, screenshot, quote, page }) => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <ReactCardFlipper
        levitate
        height="340px"
        width="100%"
        behavior="click"
        className={classes.cardOuter}
        innerCardClass={classes.cardInner}
      >
        <div className={classes.cardFront}>
          <div className={classes.imageContainer}>
            <img
              className={classes.screenshot}
              src={screenshot}
              alt={'book cover'}
            />
          </div>
        </div>
        <div className={classes.cardBack}>
          <div className={classes.quote}>{quote}</div>
          <div className={classes.cardBackBottom}>
            <div className={classes.title}>{title}</div>
            <div className={classes.author}>{author}</div>
            <Button
              color={'rgba(61, 118, 113, 1)'}
              border={'3px solid rgba(61, 118, 113, 1)'}
              boxShadowHover={'5px 5px rgba(61, 118, 113, 1)'}
              boxShadow={'5px 5px rgba(61, 118, 113, .4)'}
              text={'amazon'}
              fontSize={14}
              padding={'2px 30px'}
              page={page}
            />
          </div>
        </div>
      </ReactCardFlipper>
    </div>
  </div>
)

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardInner: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    transition: 'box-shadow .2s ease',
    height: '384px',

    '@media (min-width: 960px)': {
      height: '340px',
    },
  },
  cardBack: {
    alignContent: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    height: '384px',
    borderRadius: '8px',
    boxShadow:
      '0 16px 16px rgba(103,110,144,.05), 0 8px 8px rgba(103,110,144,.05), 0 4px 4px rgba(103,110,144,.05), 0 2px 2px rgba(103,110,144,.05)',

    '@media (min-width: 960px)': {
      height: '340px',
    },
  },
  cardBackBottom: {
    display: 'flex',
    padding: '10px 0px 20px 0px',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },
  cardOuter: {
    display: 'block',
    position: 'relative',
    height: '384px',
    '&:hover': {
      cursor: 'pointer',
    },

    '@media (min-width: 960px)': {
      height: '340px',
    },
  },
  cardFront: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '8px',
    boxShadow:
      '0 16px 16px rgba(103,110,144,.05), 0 8px 8px rgba(103,110,144,.05), 0 4px 4px rgba(103,110,144,.05), 0 2px 2px rgba(103,110,144,.05)',

    height: '384px',

    '@media (min-width: 960px)': {
      height: '340px',
    },
  },
  quote: {
    padding: '20px',
    color: '#606571',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    letterSpacing: '.5px',
    lineHeight: '1.5',
    fontSize: '18px',
  },
  title: {
    color: '#414141',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    letterSpacing: '.5px',
    lineHeight: '1.3',
    fontSize: '16px',
    paddingTop: '4px',
    marginBottom: '0px',
    textAlign: 'center',
    padding: '0px 10px',
  },
  author: {
    paddingBottom: '4px',
    color: '#606571',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontSize: '13px',
    letterSpacing: '.5px',
  },
  screenshot: {
    width: '100%',
    height: '384px',
    borderRadius: '8px',

    '@media (min-width: 960px)': {
      height: '340px',
    },
  },
}

export default injectSheet(styles)(LibraryCard)
