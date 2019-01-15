import React from 'react'
import injectSheet from 'react-jss'
import AboutHero from '../components/AboutHero'
import AboutClosing from '../components/AboutClosing'
import Skills from '../components/Skills'
import SEO from '../components/SEO'

const About = ({ classes }) => (
  <>
    <SEO title="About" />
    <div className={classes.wrapper}>
      <AboutHero />
      <Skills />
      <AboutClosing />
    </div>
  </>
)

const styles = {
  wrapper: {
    backgroundColor: '#fff',
  },
  container: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
  },
}

export default injectSheet(styles)(About)
