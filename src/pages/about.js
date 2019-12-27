import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import AboutHero from '../components/AboutHero'
import AboutClosing from '../components/AboutClosing'
import Experience from '../components/Experience'
import SEO from '../components/seo'
import { Container, Background } from '../components/globals'

const About = () => {
  const theme = useContext(ThemeContext)
  return (
    <>
      <SEO title="About" />
      <Background color={theme.colors.heroBackground}>
        <Container>
          <AboutHero />
        </Container>
      </Background>

      <Background color={theme.colors.secondaryBackground}>
        <Container>
          <Experience />
        </Container>
      </Background>
    </>
  )
}

export default About
