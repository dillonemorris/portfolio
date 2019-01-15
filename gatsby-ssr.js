/**
 *  This puts the Layout component at the top level
 *  wrapped around the page component to prevent the
 *  Layout from unmounting with every route change.
 *
 *  This is required both in gatsby-browser.js (client side)
 *  and in gatsby-ssr.js (when building on the server)
 */

import React from 'react'
import Layout from './src/components/Layout'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
