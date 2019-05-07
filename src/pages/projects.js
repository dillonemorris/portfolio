import React from 'react'
import styled from 'styled-components'
import ProjectStandard from '../components/ProjectStandard'
import ProjectInverted from '../components/ProjectInverted'
import ProjectHeader from '../components/ProjectHeader'
import data from '../data/projectData'
import SEO from '../components/seo'

const Container = styled.div`
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
  max-width: 1080px;

  @media (min-width: 600px) {
    margin: 0px auto;
  }
`

const Wrapper = styled.div`
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ProjectWrapper = styled.div`
  margin: 0px auto;
  max-width: 1080px;
`

const BackgroundWrapper = styled.div`
  background-color: #fff;
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
            switch (project.orientation) {
              case 'Standard': {
                return (
                  <BackgroundWrapper key={project.title}>
                    <ProjectWrapper>
                      <ProjectStandard
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
              }
              case 'Inverted': {
                return (
                  <ProjectInverted
                    page={project.page}
                    color={project.color}
                    key={project.title}
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
                )
              }
              default: {
                return null
              }
            }
          })}
        </ProjectWrapper>
      </Container>
    </Wrapper>
  </>
)

export default Projects
