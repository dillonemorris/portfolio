import React from 'react'
import { Link } from 'gatsby'
import { StyledButton } from './style'

const Button = ({ className, text, page, color, fontSize, padding }) => {
  const internal = /^\/(?!\/)/.test(page)

  if (internal) {
    return (
      <Link to={page}>
        <StyledButton
          fontSize={fontSize}
          color={color}
          padding={padding}
          className={className}
        >
          {text}
        </StyledButton>
      </Link>
    )
  }
  return (
    <a target="_blank" href={page} rel="noopener noreferrer">
      <StyledButton
        fontSize={fontSize}
        color={color}
        padding={padding}
        className={className}
      >
        {text}
      </StyledButton>
    </a>
  )
}

export default Button
