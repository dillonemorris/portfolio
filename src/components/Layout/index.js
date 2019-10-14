import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import Header from '../Header'
import Footer from '../Footer'
import '../../styles/layout.css'
import { pageFade } from '../../styles/poses'

const Transition = posed.div(pageFade)

class Layout extends React.Component {
  constructor() {
    super()
    this.state = { loaded: false }
  }

  componentDidMount() {
    this.setState({ loaded: true })
  }

  renderNoScript() {
    return (
      <noscript>
        <style
          dangerouslySetInnerHTML={{
            __html: `
                .initial {
                  opacity: 1 !important;
                }
              `,
          }}
        />
      </noscript>
    )
  }

  render() {
    const { location } = this.props
    const children = this.props.children
    const { loaded } = this.state

    return (
      <ThemeProvider theme={theme}>
        <Header />
        <div className={`${loaded ? ' loaded' : 'initial'}`}>
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
}

export default Layout
