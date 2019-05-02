import React from 'react'
import injectSheet from 'react-jss'
import LibraryHeader from '../components/LibraryHeader'
import LibraryCard from '../components/LibraryCard'
import DevResources from '../components/DevResources'
import Resources from '../components/Resources'
import SEO from '../components/seo'
import Container from '../components/Container'
import libraryData from '../data/libraryData'

const Library = ({ classes }) => (
  <>
    <SEO title="Library" />
    <div className={classes.wrapper}>
      <Container>
        <div className={classes.headingContainer}>
          <LibraryHeader />
        </div>
        <h1 className={classes.myHeading}>
          <span role="img" aria-label="books" style={{ fontSize: '40px' }}>
            📚
          </span>{' '}
          Books
        </h1>
        <h2 className={classes.subHeading}>
          Good reads that I've thoroughly enjoyed
        </h2>
        <div className={classes.container}>
          <div className={classes.libraryCardGrid}>
            {libraryData.map((book, i) => {
              return (
                <LibraryCard
                  key={i}
                  title={book.title}
                  author={book.author}
                  screenshot={book.screenshot}
                  quote={book.quote}
                  page={book.page}
                />
              )
            })}
          </div>
          <DevResources />
          <Resources />
        </div>
      </Container>
    </div>
  </>
)

const styles = {
  wrapper: {
    backgroundColor: '#f4f4f4',
  },
  container: {
    padding: '20px 0px',
    display: 'flex',
    flexDirection: 'column',
  },
  myHeading: {
    color: '#11181E',
    fontWeight: '600',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontSize: '28px',
    paddingTop: '60px',
    paddingBottom: '8px',
    marginBottom: '0px',
  },
  subHeading: {
    fontSize: '18px',
    fontWeight: '400',
    color: '#606571',
    letterSpacing: '.5px',
    paddingBottom: '20px',
    lineHeight: '1.4',
  },
  headingContainer: {
    backgroundColor: '#fff',
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
  },
  libraryCardGrid: {
    position: 'relative',
    display: 'grid',
    gridGap: '80px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 275px))',
    paddingBottom: '120px',

    '@media (min-width: 475px)': {
      maxWidth: '100%',
      gridGap: '40px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gridAutoRows: 'minmax(360px, auto)',
    },
  },
}

export default injectSheet(styles)(Library)
