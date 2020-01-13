import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import aboutData from '../data/aboutData'
import AboutHero from '../components/AboutHero'
import Experience from '../components/Experience'
import AboutCard from '../components/AboutCard'
import SEO from '../components/seo'
import { Container, Background, H3 } from '../components/globals'
import {
  MyContainer,
  AboutContainer,
  AboutBody,
  AboutGrid,
} from '../styles/page-styles/about-page-styles'

import Squiggly from '../images/Squiggly.svg'
import SquigglyDark from '../images/SquigglyDark.svg'

const About = () => {
  const theme = useContext(ThemeContext)
  return (
    <>
      <SEO title="About" />
      <Background color={theme.colors.background}>
        <Container>
          <AboutHero />
        </Container>
      </Background>

      <Background color={theme.colors.quaternaryBackground}>
        <Container>
          <Experience />
        </Container>
      </Background>

      <Background color={theme.colors.quaternaryBackground}>
        <MyContainer></MyContainer>
      </Background>

      <Background
        position="14% 4%"
        bg={theme.dark ? SquigglyDark : Squiggly}
        color={theme.colors.background}
      >
        <Container>
          <AboutContainer>
            <H3>Mottos I live by</H3>
            <AboutBody>
              These are the ideals I strive uphold to on a daily basis.
            </AboutBody>
            <AboutGrid>
              {aboutData.map(aboutCard => (
                <AboutCard
                  icon={aboutCard.icon}
                  title={aboutCard.title}
                  description={aboutCard.description}
                />
              ))}
            </AboutGrid>
          </AboutContainer>
        </Container>
      </Background>
    </>
  )
}

export default About
