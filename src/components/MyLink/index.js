import React from 'react'
import { StyledLink, ExternalLink } from './style'

const MyLink = ({ text, page }) => {
  const internal = /^\/(?!\/)/.test(page)

  return internal ? (
    <StyledLink to={page}>{text}</StyledLink>
  ) : (
    <ExternalLink target="_blank" href={page} rel="noopener noreferrer">
      {text}
    </ExternalLink>
  )
}

export default MyLink
