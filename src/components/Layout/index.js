import React, { useState, useEffect } from 'react'
import { useDarkMode } from '../../hooks/useDarkMode'

import posed, { PoseGroup } from 'react-pose'
import { ThemeProvider } from 'styled-components'
import themes from '../../styles/themes'
import Header from '../Header'
import Footer from '../Footer'
import '../../styles/layout.css'
import { pageFade } from '../../styles/poses'

const Transition = posed.div(pageFade)

const Layout = ({ location, children }) => {
  const [loaded, setLoaded] = useState(false)
  const [darkMode, setDarkMode] = useDarkMode()

  useEffect(() => {
    setLoaded(true)
  }, [])

  const theme = darkMode ? themes.darkTheme : themes.lightTheme

  return (
    <ThemeProvider theme={theme}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div
        style={{ background: theme.colors.background }}
        className={`${loaded ? ' loaded' : 'initial'}`}
      >
        <PoseGroup animateOnMount preEnterPose="initial">
          <Transition key={location.pathname}>
            {children}
            <Footer />
          </Transition>
        </PoseGroup>
      </div>
    </ThemeProvider>
  )
}

export default Layout
