import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { H4, Body } from '../globals'
import { Container, TagContainer, Tag, BuiltWith } from './style'

const ProjectCard = ({ title, description, tags, secondaryColor, color }) => {
  const theme = useContext(ThemeContext)
  return (
    <Container secondaryColor={secondaryColor}>
      <H4 paddingBottom={theme.spacing._1}>{title}</H4>
      <Body color={theme.colors.secondaryBody}>{description}</Body>
      <BuiltWith>
        <Body fontWeight={theme.fontWeight.medium} color={theme.colors.heading}>
          Built with
        </Body>
      </BuiltWith>
      <TagContainer>
        {tags.map(tag => (
          <Tag key={tag} color={color} secondaryColor={secondaryColor}>
            {tag}
          </Tag>
        ))}
      </TagContainer>
    </Container>
  )
}

export default ProjectCard
