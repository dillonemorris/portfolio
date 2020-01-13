import React from 'react'
import { H5, Body } from '../globals'
import { TitleDescription, IconContainer, Container } from './style'

const AboutCard = ({ title, description, icon }) => {
  return (
    <Container>
      <IconContainer>{icon}</IconContainer>
      <TitleDescription>
        <H5>{title}</H5>
        <Body>{description}</Body>
      </TitleDescription>
    </Container>
  )
}

export default AboutCard
