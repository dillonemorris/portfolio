import React from 'react'
import SEO from '../components/seo'
import Container from '../components/Container'

const NotFoundPage = () => (
  <>
    <SEO title="404 - Not Found" />
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </>
)

export default NotFoundPage
