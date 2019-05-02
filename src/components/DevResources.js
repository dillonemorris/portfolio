import React from 'react'
import injectSheet from 'react-jss'
import DevResource from './DevResource'
import devResourceData from '../data/devResourceData'

const DevResources = ({ classes }) => (
  <div className={classes.devResourceBackground}>
    <div className={classes.devResourceHeadingContainer}>
      <h1 className={classes.myHeading}>
        <span
          role="img"
          aria-label="web developer"
          style={{ fontSize: '40px' }}
        >
          👨‍💻
        </span>{' '}
        Devoloper Resources
      </h1>
      <h2 className={classes.subHeading}>
        Resources that will help you improve as a developer
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
)

const styles = {
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

    '@media (min-width: 475px)': {},
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
}

export default injectSheet(styles)(DevResources)
