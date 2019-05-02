import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import Header from './header'
import Footer from './Footer'
import './layout.css'
import { pageFade } from '../styles/poses'

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
      <>
        <Header />
        <div className={`${loaded ? ' loaded' : 'initial'}`}>
          <PoseGroup animateOnMount preEnterPose="initial">
            <Transition key={location.pathname}>
              {children}
              <Footer />
            </Transition>
          </PoseGroup>
        </div>
      </>
    )
  }
}

export default Layout
