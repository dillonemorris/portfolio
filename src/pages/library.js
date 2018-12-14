import React from 'react'
import injectSheet from 'react-jss'
import Layout from '../components/layout'
import LibraryHeader from '../components/LibraryHeader'
import LibraryCard from '../components/LibraryCard'
import Article from '../components/Article'
import Resource from '../components/Resource'
import libraryData from '../data/libraryData'
import articleData from '../data/articleData'
import resourceData from '../data/resourceData'

const Library = ({ classes }) => (
  <div className={classes.wrapper}>
    <Layout>
      <div className={classes.headingContainer}>
        <LibraryHeader />
      </div>
      <div className={classes.container}>
        <h1 className={classes.myHeading}>Books</h1>
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
        <div className={classes.articleBackground}>
          <div className={classes.articleContainer}>
            <h1 className={classes.myHeading}>Articles</h1>
            {articleData.map((article, i) => {
              return (
                <Article
                  key={i}
                  title={article.title}
                  author={article.author}
                  link={article.link}
                />
              )
            })}
          </div>
        </div>
        <div className={classes.resourceContainer}>
          <h1 className={classes.myHeading}>Resources</h1>
          {resourceData.map((resource, i) => {
            return (
              <Resource
                key={i}
                title={resource.title}
                category={resource.category}
                link={resource.link}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  </div>
)

const styles = {
  wrapper: {
    backgroundColor: '#f4f4f4',
  },
  container: {
    padding: '80px 0px',
    display: 'flex',
    flexDirection: 'column',
  },
  myHeading: {
    color: '#414141',
    fontWeight: '600',
    fontFamily: 'Inter UI',
    fontSize: '32px',
    paddingBottom: '24px',
  },
  link: {
    color: '#4183D7',
    textDecoration: 'none',
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
    paddingBottom: '60px',
    // gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',

    '@media (min-width: 475px)': {
      maxWidth: '100%',
      gridGap: '40px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gridAutoRows: 'minmax(400px, auto)',
    },
  },
  articleBackground: {
    backgroundColor: '#fff',
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
  },
  articleContainer: {
    maxWidth: '1080px',
    margin: 'auto',
    padding: '80px 1.0875rem 60px',
  },
  resourceContainer: {
    padding: '60px 0px',
  },
}

export default injectSheet(styles)(Library)
