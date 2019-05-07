import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import SkillPill from './SkillPill'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 84px 0px 32px;

  @media (min-width: 900px) {
    padding: 96px 0px 64px;
  }

  :hover {
    cursor: pointer;
  }
`

const Wrapper = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 1.0875rem 1.45rem;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`

const Link = styled.a`
  color: #4183d7;
  font-size: 18px;
  text-decoration: none;

  :hover {
    border-bottom: 2px solid rgba(96, 101, 113, 0.2);
    transition: all 200ms ease-in-out;
  }
`

const Title = styled.h1`
  color: #11181e;
  font-weight: 600;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  font-size: 32px;
  transition: all 170ms ease-in-out;
  margin-bottom: 0px;

  @media (min-width: 900px) {
    font-size: 36px;
  }
`

const Description = styled.p`
  color: #486581;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  max-width: 500px;
  line-height: 32px;
  font-size: 21px;
  margin: 16px 0px 24px;

  @media (min-width: 900px) {
    margin: 16px 0px;
    margin-bottom: 24px;
  }
`

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  margin-bottom: 16px;
`

const StyledButton = styled(Button)`
  font-family: Plex mono;
  font-size: 14px;
  letter-spacing: 0.8px;
  font-weight: 600;
  background: #fff;
  border: 3px solid #11181e;
  box-shadow: ${props => props.boxShadow};
  padding: 10px 30px;
  text-decoration: none;
  color: #11181e;
  transition: all 170ms ease-in-out;
  width: 100%;

  @media (min-width: 600px) {
    width: auto;
  }

  :hover {
    box-shadow: ${props => props.boxShadowHover};
    cursor: pointer;
    border: 3px solid ${props => props.color};
    color: ${props => props.color};
  }
`

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 40px;

  @media (min-width: 900px) {
    padding: 80px 0px;
    max-width: 50%;
    padding-left: 50px;
  }

  :hover {
    cursor: pointer;
  }
`

const Screenshot = styled.img`
  box-shadow: 0 16px 16px rgba(103, 110, 144, 0.05),
    0 8px 8px rgba(103, 110, 144, 0.05), 0 4px 4px rgba(103, 110, 144, 0.05),
    0 2px 2px rgba(103, 110, 144, 0.05);
  transition: box-shadow 0.2s ease;
`

const StyledSkillPill = styled(SkillPill)`
  color: ${props => props.color};
  font-size: 14px;
`

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
            <StyledSkillPill key={id} text={skill} />
          ))}
        </SkillsContainer>
        <StyledButton
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
