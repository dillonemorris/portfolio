import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { H4, SmallBody, Body } from '../globals'
import { Container, Time, CompanyLocation, Company } from './style'

const ExperienceCard = ({
  time,
  title,
  company,
  location,
  description,
  borderColor,
}) => {
  const theme = useContext(ThemeContext)

  return (
    <Container borderColor={borderColor}>
      <Time color={theme.colors.tertiaryBody}>{time}</Time>
      <H4>{title}</H4>
      <CompanyLocation>
        <Company>{company}</Company>
        <SmallBody color={theme.colors.tertiaryBody}>{location}</SmallBody>
      </CompanyLocation>
      <Body>{description}</Body>
    </Container>
  )
}

export default ExperienceCard
