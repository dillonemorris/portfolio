import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Scale = () => {
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
          d="M20 10v25M15.135 35h9.685M1.668 19.997L7.5 6.667l5.812 13.33M17.642 6.667H5M13.333 20a5.833 5.833 0 11-11.666 0h11.666zM38.332 19.997L32.5 6.667l-5.812 13.33M22.358 6.667H35M26.667 20a5.833 5.833 0 1011.666 0H26.667zM20 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5z"
          strokeWidth="1.66667"
        />
      </g>
    </svg>
  )
}

export default Scale
