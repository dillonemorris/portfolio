import React from 'react'
import { Link } from 'gatsby'

const MyLink = ({ text, page, className }) => {
  const internal = /^\/(?!\/)/.test(page)

  return internal ? (
    <Link className={className} to={page}>
      {text}
    </Link>
  ) : (
    <a
      className={className}
      target="_blank"
      href={page}
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
}

export default MyLink
