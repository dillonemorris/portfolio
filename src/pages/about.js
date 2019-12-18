import React from 'react'
import AboutHero from '../components/AboutHero'
import AboutClosing from '../components/AboutClosing'
import Skills from '../components/Skills'
import SEO from '../components/seo'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
  max-width: 1200px;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    margin: 0px auto;
  }
`

const Wrapper = styled.div`
  backgroundcolor: '#fff';
`

const About = () => (
  <>
    <SEO title="About" />
    <Wrapper>
      <Container>
        <AboutHero />
        <Skills />
        <AboutClosing />
      </Container>
    </Wrapper>
  </>
)

export default About
