import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import jobData from '../../data/jobData'

import { Heading, Container, CardContainer } from './style'
import ExperienceCard from '../ExperienceCard'

const Experience = () => {
  const theme = useContext(ThemeContext)

  return (
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
  )
}

export default Experience
