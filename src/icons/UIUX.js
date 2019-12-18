import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const UIUX = () => {
  const theme = useContext(ThemeContext)
  return (
    <svg
      width="48"
      height="48"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <g
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M3 1h42a2 2 0 012 2v42a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2z"
          stroke={theme.dark ? '#fff' : '#1A202C'}
        />
        <path
          d="M16 13a9 9 0 11-.001 18.001A9 9 0 0116 13z"
          stroke={theme.dark ? '#fff' : '#1A202C'}
          fill={theme.dark ? '#7F9CF5' : '#C3DAFE'}
        />
        <path
          d="M29 7H19a2 2 0 00-2 2v4.056A9.002 9.002 0 0124.944 21H29a2 2 0 002-2V9a2 2 0 00-2-2z"
          stroke={theme.dark ? '#fff' : '#1A202C'}
          fill={theme.dark ? '#B2F5EA' : '#7F9CF5'}
        />
        <path
          d="M37 13h6M37 17h4M7 37h18M7 41h6"
          stroke={theme.dark ? '#C3DAFE' : '#4C51BF'}
        />
        <path d="M29 26l6.64 5.534" stroke={theme.dark ? '#fff' : '#1A202C'} />
        <path
          d="M37 31h4a2 2 0 012 2v8a2 2 0 01-2 2h-4a2 2 0 01-2-2v-8a2 2 0 012-2z"
          stroke={theme.dark ? '#fff' : '#1A202C'}
          fill={theme.dark ? '#E6FFFA' : '#5A67D8'}
        />
        <path d="M17 41h2M37 9h6" stroke={theme.dark ? '#fff' : '#4C51BF'} />
      </g>
    </svg>
  )
}

export default UIUX
