import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Idea = () => {
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
          d="M38.333 16.667v15.035c0 .91-.73 1.651-1.64 1.666C27.638 33.633 20 36.128 20 39.167c0-3.04-7.64-5.535-16.693-5.809a1.667 1.667 0 01-1.64-1.666V7.53c0-.92.746-1.667 1.666-1.667h.029C12.392 6.143 20 8.635 20 11.667M5.833 13.333c3.715.197 7.375.997 10.834 2.369M5.833 19.008c3.715.195 7.375.995 10.834 2.365M5.833 24.682c3.715.195 7.375.993 10.834 2.365M20 11.668V38.96"
          strokeWidth="1.66667"
        />
        <path
          d="M35 10.833a5 5 0 10-6.667 4.695V17.5h3.334v-1.97A4.985 4.985 0 0035 10.833zM28.333 20.835h3.334M29.167 24.168h1.666M30 2.502V.835M35.893 4.943l1.179-1.178M24.108 4.943l-1.18-1.178"
          strokeWidth="1.66667"
        />
      </g>
    </svg>
  )
}

export default Idea
