import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import about from '../../images/about.png'
import {
  Container,
  Img,
  Right,
  Heading,
  FirstParagraph,
  SecondParagraph,
} from './style'

const AboutHero = () => (
  <Container>
    <Img src={about} alt={'Dillon standing beneath tree in Autumn'} />
    <Right>
      <Heading>Dillon Morris</Heading>
      <FirstParagraph>
        I get to work on a team that makes digital products that help people. I
        am grateful for that privilege and strive to make the most of it.
      </FirstParagraph>
      <SecondParagraph>
        When I'm not coding & creating for the web I enjoy playing and writing
        music and staying physically active.
      </SecondParagraph>
    </Right>
  </Container>
)
export default AboutHero
