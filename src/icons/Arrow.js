import React from 'react'

const Arrow = ({ color }) => {
  const stroke = color ? color : '#4C51BF'
  return (
    <svg width="15" height="18" xmlns="http://www.w3.org/2000/svg">
      <g
        stroke={stroke}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.5 16.667l6.036-7.12a.878.878 0 000-1.094L7.5 1.333" />
        <path d="M1.813 16.667c-.447 0-.604-.247-.35-.548l5.573-6.572a.878.878 0 000-1.094L1.464 1.879c-.255-.301-.098-.546.349-.546H3.03c.502.024.966.223 1.277.547L9.88 8.453a.878.878 0 010 1.094l-5.572 6.571c-.31.325-.775.525-1.277.549H1.812z" />
      </g>
    </svg>
  )
}

export default Arrow
