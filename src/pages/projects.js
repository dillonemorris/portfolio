import React from 'react'
import injectSheet from 'react-jss'
import ProjectStandard from '../components/ProjectStandard'
import ProjectInverted from '../components/ProjectInverted'
import ProjectHeader from '../components/ProjectHeader'
import data from '../data/projectData'
import SEO from '../components/seo'
import Container from '../components/Container'

const Projects = ({ classes }) => (
  <>
    <SEO title="Projects" />
    <div className={classes.container}>
      <Container>
        <ProjectHeader />
        <div className={classes.projectWrapper}>
          {data.map((project, i) => {
            switch (project.orientation) {
              case 'Standard': {
                return (
                  <div key={project.title} className={classes.bgWrapper}>
                    <div className={classes.projectWrapper}>
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
                      />
                    </div>
                  </div>
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
                  />
                )
              }
              default: {
                return null
              }
            }
          })}
        </div>
      </Container>
    </div>
  </>
)

const styles = {
  container: {
    backgroundColor: '#f4f4f4',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  link: {
    color: '#4183D7',
    textDecoration: 'none',
  },
  projectWrapper: {
    margin: '0px auto',
    maxWidth: '1080px',
  },
  bgWrapper: {
    backgroundColor: '#fff',
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
  },
}

export default injectSheet(styles)(Projects)
