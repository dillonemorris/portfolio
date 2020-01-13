import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import jobData from '../../data/jobData'

import { Heading, Container, CardContainer } from './style'
import { Background } from '../globals'
import ExperienceCard from '../ExperienceCard'

import GradientTriangle from '../../images/GradientTriangle.svg'
import GradientTriangleDark from '../../images/GradientTriangleDark.svg'

const Experience = () => {
  const theme = useContext(ThemeContext)

  return (
    <Background
      size="125vh"
      position="bottom left"
      color={theme.colors.quaternaryBackground}
      bg={theme.dark ? GradientTriangleDark : GradientTriangle}
    >
      <Container>
        <Heading>Experience</Heading>
        <CardContainer>
          {jobData.map((job, index) => (
            <ExperienceCard
              time={job.time}
              title={job.title}
              company={job.company}
              location={job.location}
              description={job.description}
              borderColor={
                index === 1 ? theme.colors.yellow400 : theme.colors.primary300
              }
            />
          ))}
        </CardContainer>
      </Container>
    </Background>
  )
}

export default Experience
