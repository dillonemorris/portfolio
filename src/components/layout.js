import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import posed, { PoseGroup } from 'react-pose'
import Footer from './Footer'
import Header from './header'
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
          <Transition
            key={this.props.location.pathname}
            style={{
              margin: '0 auto',
              maxWidth: 1080,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </Transition>
        </PoseGroup>
        <Footer />
      </>
    )
  }
}

export default Layout
