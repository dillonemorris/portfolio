/**
 *  The code below does two important steps that are
 *  necessary for page transitions to work properly:
 *
 *  1. This puts the Layout component at the top level
 *     wrapped around the page component to prevent the
 *     Layout from unmounting with every route change.
 *     https://www.gatsbyjs.org/docs/layout-components/#how-to-prevent-layout-components-from-unmounting
 *
 *  2. This manually delays the scroll to top functionality
 *     when a link is clicked or the route changes. This is
 *     set to 350 milliseconds and allows the page transition
 *     to finish before jumping to the top of the page.
 *     https://github.com/gatsbyjs/gatsby/issues/5213#issuecomment-428368131
 */

import React from 'react'
import Layout from './src/components/layout'

const transitionDelay = 350

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    )
  }
  return false
}
