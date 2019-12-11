import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { H5, Body } from '../globals'
import { InfoContainer, Container } from './style'
import Button from '../Button'

const ProjectCard = ({
  title,
  description,
  screenshot,
  btnText,
  page,
  color,
}) => {
  const theme = useContext(ThemeContext)
  return (
    <Container>
      <img src={screenshot} />
      <InfoContainer>
        <H5>{title}</H5>
        <Body
          color={theme.colors.secondaryBody}
          style={{ marginBottom: theme.spacing._5 }}
        >
          {description}
        </Body>
        <Button color={color} page={page} text={btnText} />
      </InfoContainer>
    </Container>
  )
}

export default ProjectCard
