import React, { Fragment } from 'react'
import Resource from '../Resource'
import resourceData from '../../data/resourceData'
import { Heading, Subheading, ResourceContainer } from './style'

const Resources = () => (
  <Fragment>
    <Heading style={{ paddingTop: '60px' }}>
      <span style={{ fontSize: '40px' }} aria-label="designer" role="img">
        👩‍🎨
      </span>{' '}
      Design Resources
    </Heading>
    <Subheading style={{ paddingBottom: '36px' }}>
      Resources for design tips, inspiration, and best practices
    </Subheading>
    <ResourceContainer>
      {resourceData.map((resource, i) => {
        const { title, category, link, image } = resource
        return (
          <Resource
            key={i}
            title={title}
            category={category}
            link={link}
            image={image}
          />
        )
      })}
    </ResourceContainer>
  </Fragment>
)

export default Resources
