import React from 'react'
import Button from '../Button'
import Pattern from '../../images/Pattern'
import {
  PatternBackground,
  Container,
  Closing,
  Heading,
  ClosingContainer,
  Description,
  Link,
} from './style'

const AboutClosing = () => (
  <PatternBackground bg={Pattern}>
    <Container>
      <Closing>
        <Heading>Contact</Heading>
      </Closing>
    </Container>
  </PatternBackground>
)

export default AboutClosing
