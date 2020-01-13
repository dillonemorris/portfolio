import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Team = () => {
  const {
    colors: { aboutIcon },
  } = useContext(ThemeContext)
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <g
        stroke={aboutIcon}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M5.833 13.385a3.75 3.75 0 110 7.5 3.75 3.75 0 110-7.5zM5.833 22.55a5 5 0 00-5 5v4.167h2.5l.834 7.5H7.5l.833-7.5h2.5V27.55a5 5 0 00-5-5zM34.167 13.385a3.75 3.75 0 110 7.5 3.75 3.75 0 110-7.5zM34.167 22.55a5 5 0 00-5 5v4.167h2.5l.833 7.5h3.333l.834-7.5h2.5V27.55a5 5 0 00-5-5zM20.833 22.552h-1.666M22.5 19.218h-5M20 .885v1.667M10.5 9.218h2M29.167 9.218H27.5M11.667 3.385l1.666 1.667M28.333 3.385l-1.666 1.667M25 10.052a5.15 5.15 0 00-5-5 5.15 5.15 0 00-5 5 4.902 4.902 0 002.5 4.166v1.667h5v-1.667a4.907 4.907 0 002.5-4.166z"
          strokeWidth="1.66667"
        />
      </g>
    </svg>
  )
}

export default Team
