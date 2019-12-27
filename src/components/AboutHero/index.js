import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import about from '../../images/about.png'

import { LargeBody } from '../globals'
import { Container, Img, Right, Heading } from './style'

const AboutHero = () => {
  const theme = useContext(ThemeContext)
  return (
    <Container>
      <Img src={about} alt={'Dillon standing beneath tree in Autumn'} />
      <Right>
        <Heading>Dillon Morris</Heading>
        <LargeBody paddingBottom={theme.spacing._6}>
          I get to work on a team that makes digital products that help people.
          I am grateful for that privilege and strive to make the most of it.
        </LargeBody>
        <LargeBody>
          When I'm not coding & creating for the web I enjoy playing and writing
          music and staying physically active.
        </LargeBody>
      </Right>
    </Container>
  )
}

export default AboutHero
