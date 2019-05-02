import React, { Fragment } from 'react'
import injectSheet from 'react-jss'
import Resource from './Resource'
import resourceData from '../data/resourceData'

const Resources = ({ classes }) => (
  <Fragment>
    <h1 style={{ paddingTop: '60px' }} className={classes.myHeading}>
      <span style={{ fontSize: '40px' }} aria-label="designer" role="img">
        👩‍🎨
      </span>{' '}
      Design Resources
    </h1>
    <h2 style={{ paddingBottom: '36px' }} className={classes.subHeading}>
      Resources for design tips, inspiration, and best practices
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
  </Fragment>
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
  },
  resourceContainer: {
    display: 'grid',
    gridGap: '50px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    paddingBottom: '60px',
  },
}

export default injectSheet(styles)(Resources)
