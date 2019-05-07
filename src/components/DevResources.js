import React from 'react'
import styled from 'styled-components'
import DevResource from './DevResource'
import devResourceData from '../data/devResourceData'

const Background = styled.div`
  background-color: #fff;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const HeadingContainer = styled.div`
  max-width: 1080px;
  margin: auto;
  padding: 0px 1.0875rem 0px;
`

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
`

const Container = styled.div`
  max-width: 1080px;
  margin: auto;
  padding: 20px 1.0875rem 60px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  padding-bottom: 60px;
`

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
