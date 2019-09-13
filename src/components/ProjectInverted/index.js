import React from 'react'
import Button from '../Button'
import {
  Link,
  Wrapper,
  ProjectContainer,
  Screenshot,
  Container,
  Title,
  Description,
  SkillsContainer,
  StyledSkillPill,
} from './style'

const ProjectInverted = ({
  title,
  description,
  screenshot,
  id,
  btnText,
  color,
  page,
  boxShadow,
  boxShadowHover,
  border,
  skills,
}) => (
  <Link href={page} target="_blank" rel="noopener noreferrer">
    <Wrapper>
      <ProjectContainer>
        <Screenshot src={screenshot} alt={'screenshot of project'} />
      </ProjectContainer>
      <Container>
        <Title style={{ color }}>{title}</Title>
        <Description>{description}</Description>
        <SkillsContainer>
          {skills.map((skill, id) => (
            <StyledSkillPill key={id} color={color} text={skill} />
          ))}
        </SkillsContainer>
        <Button
          boxShadow={boxShadow}
          boxShadowHover={boxShadowHover}
          border={border}
          color={color}
          text={btnText}
          page={page}
        />
      </Container>
    </Wrapper>
  </Link>
)

export default ProjectInverted
