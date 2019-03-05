import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import Header from './header'
import Footer from './Footer'
import './layout.css'
import { pageFade } from '../styles/poses'

const Transition = posed.div(pageFade)

class Layout extends React.Component {
  render() {
    const { location } = this.props
    const children = this.props.children

    return (
      <>
        <Header />
        <PoseGroup animateOnMount preEnterPose="initial">
          <Transition key={location.pathname}>
            {children}
            <Footer />
          </Transition>
        </PoseGroup>
      </>
    )
  }
}

export default Layout
