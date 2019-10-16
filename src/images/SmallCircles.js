import React from 'react'

const SmallCircles = ({ primary, secondary }) => {
  const primaryFill = primary ? primary : '#CBD5E0'
  const secondaryFill = secondary ? secondary : '#667EEA'

  return (
    <svg width="51" height="53" xmlns="http://www.w3.org/2000/svg">
      <g fill-rule="nonzero" fill="none">
        <circle fill={primaryFill} cx="21.5" cy="31.5" r="21.5" />
        <circle fill={secondaryFill} cx="29.5" cy="21.5" r="21.5" />
      </g>
    </svg>
  )
}

export default SmallCircles
