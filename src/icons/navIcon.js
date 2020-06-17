import React from 'react'

const navIcon = ({ color }) => {
  const stroke = color ? color : '#1A202C'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="32"
      width="32"
      viewBox="0 0 24 24"
    >
      <g
        stroke={stroke}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.25 8H6.75M17.25 12H6.75M17.25 16H6.75M2.5.5h19a2 2 0 012 2v19a2 2 0 01-2 2h-19a2 2 0 01-2-2v-19a2 2 0 012-2z" />
      </g>
    </svg>
  )
}

export default navIcon
