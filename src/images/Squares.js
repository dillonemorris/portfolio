import React from 'react'

const Squares = ({ primary, secondary }) => {
  const primaryFill = primary ? primary : '#667EEA'
  const secondaryFill = secondary ? secondary : '#CBD5E0'
  return (
    <svg width="51" height="51" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path fill={secondaryFill} d="M0 11h40v40H0z" />
        <path fill={primaryFill} d="M11 0h40v40H11z" />
      </g>
    </svg>
  )
}

export default Squares
