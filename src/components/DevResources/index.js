import React from 'react'
import DevResource from '../DevResource'
import devResourceData from '../../data/devResourceData'
import {
  Background,
  HeadingContainer,
  Heading,
  Subheading,
  Container,
} from './style'

const DevResources = () => (
  <Background>
    <HeadingContainer>
      <Heading>
        <span
          role="img"
          aria-label="web developer"
          style={{ fontSize: '40px' }}
        >
          👨‍💻
        </span>{' '}
        Devoloper Resources
      </Heading>
      <Subheading>
        Resources that will help you improve as a developer
      </Subheading>
    </HeadingContainer>
    <Container>
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
    </Container>
  </Background>
)

export default DevResources
