import React from 'react'
import injectSheet from 'react-jss'

import Layout from '../components/layout'
import AboutHero from '../components/AboutHero'
import AboutClosing from '../components/AboutClosing'
import Skills from '../components/Skills'

const About = ({ classes }) => (
  <div className={classes.wrapper}>
    <Layout>
      <AboutHero />
      <Skills />
      <AboutClosing />
    </Layout>
  </div>
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
