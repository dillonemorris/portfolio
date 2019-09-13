import React from 'react'
import SkillTitle from '../../components/SkillTitle'
import SkillPill from '../../components/SkillPill'
import skillData from '../../data/skillData'
import {
  BgWrapper,
  Container,
  Heading,
  Paragraph,
  SkillsContainer,
} from './style'

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
