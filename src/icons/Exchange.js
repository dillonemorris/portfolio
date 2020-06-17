import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Exchange = () => {
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
          d="M28.333 16.668v8.334M36.667 20c0 9.205-7.462 16.667-16.667 16.667A18.854 18.854 0 016.667 30M3.333 20c0-9.205 7.462-16.667 16.667-16.667A18.854 18.854 0 0133.333 10"
          strokeWidth="1.66667"
        />
        <path
          d="M26.667 10.002h6.666V3.335M13.333 30.002H6.667v6.666M19.382 13.41l-7.232 2.892a.209.209 0 000 .386l7.232 2.892c.396.16.84.16 1.236 0l7.715-3.08-7.715-3.09c-.396-.16-.84-.16-1.236 0zM15 20.667v2.5a6.625 6.625 0 005 1.666 6.625 6.625 0 005-1.666v-2.5M28.333 16.495v8.333M28.333 28.162v1.666"
          strokeWidth="1.66667"
        />
      </g>
    </svg>
  )
}

export default Exchange
