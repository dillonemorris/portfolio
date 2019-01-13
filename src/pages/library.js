import React from 'react'
import injectSheet from 'react-jss'
import Layout from '../components/layout'
import LibraryHeader from '../components/LibraryHeader'
import LibraryCard from '../components/LibraryCard'
import DevResource from '../components/DevResource'
import Resource from '../components/Resource'
import libraryData from '../data/libraryData'
import devResourceData from '../data/devResourceData'
import resourceData from '../data/resourceData'

const Library = ({ classes }) => (
  <div className={classes.wrapper}>
    <Layout>
      <div className={classes.headingContainer}>
        <LibraryHeader />
      </div>
      <h1 className={classes.myHeading}>Books</h1>
      <h2 className={classes.subHeading}>
        Books I've thoroughly enjoyed and highly recommend.
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
        <div className={classes.devResourceBackground}>
          <div className={classes.devResourceHeadingContainer}>
            <h1 className={classes.myHeading}>Devoloper Resources</h1>
            <h2 className={classes.subHeading}>
              Resources that will help you improve as a developer.
            </h2>
          </div>
          <div className={classes.devResourceContainer}>
            {devResourceData.map((devResource, i) => {
              return (
                <DevResource
                  key={i}
                  title={devResource.title}
                  category={devResource.category}
                  link={devResource.link}
                  image={devResource.image}
                />
              )
            })}
          </div>
        </div>

        <h1 style={{ paddingTop: '60px' }} className={classes.myHeading}>
          Design Resources
        </h1>
        <h2 style={{ paddingBottom: '36px' }} className={classes.subHeading}>
          Resources for design tips, inspiration, and best practices.
        </h2>
        <div className={classes.resourceContainer}>
          {resourceData.map((resource, i) => {
            return (
              <Resource
                key={i}
                title={resource.title}
                category={resource.category}
                link={resource.link}
                image={resource.image}
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
    padding: '20px 0px',
    display: 'flex',
    flexDirection: 'column',
  },
  myHeading: {
    color: '#414141',
    fontWeight: '600',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontSize: '26px',
    paddingTop: '60px',
    paddingBottom: '8px',
    marginBottom: '0px',
  },
  subHeading: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#606571',
    letterSpacing: '.5px',
    paddingBottom: '20px',
    lineHeight: '1.4',
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
    paddingBottom: '120px',

    '@media (min-width: 475px)': {
      maxWidth: '100%',
      gridGap: '40px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gridAutoRows: 'minmax(360px, auto)',
    },
  },
  devResourceBackground: {
    backgroundColor: '#fff',
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
  },
  devResourceContainer: {
    maxWidth: '1080px',
    margin: 'auto',
    padding: '20px 1.0875rem 60px',
    display: 'grid',
    gridGap: '50px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    paddingBottom: '60px',
  },
  devResourceHeadingContainer: {
    maxWidth: '1080px',
    margin: 'auto',
    padding: '0px 1.0875rem 0px',
  },
  resourceContainer: {
    display: 'grid',
    gridGap: '50px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    paddingBottom: '60px',
  },
}

export default injectSheet(styles)(Library)
