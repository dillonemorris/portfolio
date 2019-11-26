import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const FontSizeLarge = () => {
  const {
    colors: { gray900 },
  } = useContext(ThemeContext)
  return (
    <svg
      style={{ marginLeft: '3px' }}
      width="19"
      height="19"
      viewBox="0 0 17 17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke={gray900}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.375 14.5L7.027.883a.5.5 0 01.946 0L12.625 14.5M.5 14.498h4M10.5 14.498h4M4.425 8.498h6.15" />
      </g>
    </svg>
  )
}

export default FontSizeLarge
