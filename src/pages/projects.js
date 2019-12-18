import React from 'react'
import styled from 'styled-components'
import Project from '../components/Project'
import ProjectHeader from '../components/ProjectHeader'
import data from '../data/projectData'
import SEO from '../components/seo'

const Container = styled.div`
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
  max-width: 1200px;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    margin: 0px auto;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ProjectWrapper = styled.div`
  margin: 0px auto;
  max-width: 1200px;
`

const BackgroundWrapper = styled.div`
  background-color: ${props => (props.orientation ? '#fff' : '#f4f4f4')};
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const Projects = () => (
  <>
    <SEO title="Projects" />
    <Wrapper>
      <Container>
        <ProjectHeader />
        <ProjectWrapper>
          {data.map((project, i) => {
            return (
              <BackgroundWrapper orientation={i % 2 !== 0} key={project.title}>
                <ProjectWrapper>
                  <Project
                    orientation={i % 2 !== 0}
                    page={project.page}
                    color={project.color}
                    title={project.title}
                    description={project.description}
                    screenshot={project.screenshot}
                    btnText={project.btnText}
                    border={project.border}
                    boxShadow={project.boxShadow}
                    boxShadowHover={project.boxShadowHover}
                    skills={project.skills}
                    id={project.id}
                  />
                </ProjectWrapper>
              </BackgroundWrapper>
            )
          })}
        </ProjectWrapper>
      </Container>
    </Wrapper>
  </>
)

export default Projects
