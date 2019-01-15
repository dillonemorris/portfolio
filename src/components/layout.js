import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import posed, { PoseGroup } from 'react-pose'
import Header from './header'
import Footer from './Footer'
import './layout.css'
import { pageFade } from '../styles/poses'

const Transition = posed.div(pageFade)

class Layout extends React.Component {
  render() {
    const props = this.props
    const children = this.props.children

    return (
      <>
        <Header />
        <PoseGroup animateOnMount preEnterPose="initial">
          <Transition key={this.props.location.pathname}>
            {children}
            <Footer />
          </Transition>
        </PoseGroup>
      </>
    )
  }
}

export default Layout
