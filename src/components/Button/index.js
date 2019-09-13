import React from 'react'
import { Link } from 'gatsby'
import { StyledButton } from './style'

const Button = ({
  className,
  text,
  page,
  color,
  border,
  boxShadowHover,
  boxShadow,
  fontSize,
  padding,
}) => {
  const internal = /^\/(?!\/)/.test(page)

  if (internal) {
    return (
      <Link to={page}>
        <StyledButton
          border={border}
          boxShadow={boxShadow}
          boxShadowHover={boxShadowHover}
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
        border={border}
        boxShadow={boxShadow}
        boxShadowHover={boxShadowHover}
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
