import React from 'react'
import styled from 'styled-components'
import SkillTitle from '../components/SkillTitle'
import SkillPill from '../components/SkillPill'
import skillData from '../data/skillData'

const BgWrapper = styled.div`
  background-color: #f4f4f4;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const Container = styled.div`
  margin: 0px auto;
  max-width: 1080px;
  padding: 60px 1.0875rem 40px;
`

const Heading = styled.h1`
  color: #11181e;
  font-weight: 500;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  font-size: 28px;
  letter-spacing: 0.3px;

  @media (min-width: 700px) {
    font-size: 40px;
  }
`

const Paragraph = styled.div`
  color: #486581;
  font-size: 20px;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  padding-bottom: 50px;
  line-height: 1.5;
  max-width: 400px;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
`

const Skills = () => (
  <BgWrapper id="target">
    <Container>
      <Heading>Skills</Heading>
      <Paragraph>
        I have skills in both UI/UX Design and Front End Development. Being able
        to take a product or feature from idea to implementation is what thrills
        me.
      </Paragraph>
      <div>
        {Object.keys(skillData).map(skill => {
          const skillObject = skillData[skill]
          return (
            <div key={skillObject.title}>
              <SkillTitle title={skillObject.title} />
              <SkillsContainer>
                {skillObject.skills.map((skill, i) => {
                  return <SkillPill key={i} text={skill} color="#4183d7" />
                })}
              </SkillsContainer>
            </div>
          )
        })}
      </div>
    </Container>
  </BgWrapper>
)

export default Skills
