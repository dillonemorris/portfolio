import React from 'react'

const Quill = ({ color }) => {
  const stroke = color ? color : '#4C51BF'
  return (
    <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
      <g
        stroke={stroke}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22.036 2.964L.5 24.5M4.762 20.238c-.707-.707-1.061-6.01.353-7.424l9.849-9.85a5 5 0 117.072 7.072l-9.85 9.849c-1.414 1.415-6.717 1.06-7.424.353z" />
        <path d="M16.429 15.642C15.015 17.056 9.711 16.7 9 16c-.711-.7-1.06-6.011.354-7.425M20.672 11.4c-1.415 1.415-6.718 1.061-7.425.354-.707-.707-1.061-6.01.354-7.425" />
      </g>
    </svg>
  )
}

export default Quill
