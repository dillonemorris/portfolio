import React, { Fragment } from 'react'
import styled from 'styled-components'
import Resource from './Resource'
import resourceData from '../data/resourceData'

const Heading = styled.h1`
  color: #11181e;
  font-weight: 600;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  font-size: 28px;
  padding-top: 60px;
  padding-bottom: 8px;
  margin-bottom: 0px;
`

const Subheading = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: #486581;
  letter-spacing: 0.5px;
  padding-bottom: 20px;
  line-height: 1.4;
  padding-bottom: 36px;
`

const ResourceContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  padding-bottom: 60px;
`

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
