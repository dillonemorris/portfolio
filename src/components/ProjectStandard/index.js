import React from 'react'
import Button from '../Button'
import SkillPill from '../SkillPill'
import {
  Container,
  Wrapper,
  Link,
  Title,
  Description,
  SkillsContainer,
  ProjectContainer,
  Screenshot,
} from './style'

const ProjectStandard = ({
  title,
  description,
  screenshot,
  btnText,
  id,
  color,
  page,
  boxShadow,
  boxShadowHover,
  border,
  skills,
}) => (
  <Link href={page} target="_blank" rel="noopener noreferrer">
    <Wrapper>
      <Container>
        <Title style={{ color }}>{title}</Title>
        <Description>{description}</Description>
        <SkillsContainer>
          {skills.map((skill, id) => (
            <SkillPill color={color} key={id} text={skill} />
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
      <ProjectContainer>
        <Screenshot src={screenshot} alt={'screenshot of project'} />
      </ProjectContainer>
    </Wrapper>
  </Link>
)

export default ProjectStandard
