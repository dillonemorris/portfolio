import React from 'react'
import { Link } from 'gatsby'

const Button = ({ className, text, page }) => {
  const internal = /^\/(?!\/)/.test(page)

  if (internal) {
    return (
      <Link to={page}>
        <button className={className}>{text}</button>
      </Link>
    )
  }
  return (
    <a target="_blank" href={page} rel="noopener noreferrer">
      <button className={className}>{text}</button>
    </a>
  )
}

export default Button
