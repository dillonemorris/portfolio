import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Lightbulb = () => {
  const theme = useContext(ThemeContext)

  return (
    <svg width="40" height="44" xmlns="http://www.w3.org/2000/svg">
      <g
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M25.455 31.717v4.033c0 3.038-2.442 5.5-5.455 5.5s-5.455-2.462-5.455-5.5v-4.033M20 41.252v1.833"
          stroke={theme.dark ? '#fff' : '#1A202C'}
        />
        <path
          d="M21.818 32.868V22c0-1.518 1.222-2.75 2.727-2.75 1.506 0 2.728 1.232 2.728 2.75s-1.222 2.75-2.728 2.75h-9.09c-1.506 0-2.728-1.232-2.728-2.75s1.222-2.75 2.728-2.75c1.505 0 2.727 1.232 2.727 2.75v10.866"
          stroke={theme.dark ? '#B2F5EA' : '#4C51BF'}
        />
        <path
          d="M14.62 36.669h10.76M20 7.335c7.03 0 12.727 5.746 12.727 12.834 0 7.087-5.698 12.833-12.727 12.833-7.03 0-12.727-5.746-12.727-12.834C7.273 13.082 12.97 7.336 20 7.336zM20 .918v1.834"
          stroke={theme.dark ? '#fff' : '#1A202C'}
        />
        <path
          d="M6.5 6.558l1.285 1.296"
          stroke={theme.dark ? '#fff' : '#667EEA'}
        />
        <path d="M.91 20.169h1.817" stroke={theme.dark ? '#fff' : '#1A202C'} />
        <path
          d="M6.5 33.781l1.285-1.296M33.5 33.781l-1.285-1.296"
          stroke={theme.dark ? '#B2F5EA' : '#667EEA'}
        />
        <path
          d="M39.09 20.169h-1.817"
          stroke={theme.dark ? '#fff' : '#1A202C'}
        />
        <path
          d="M33.5 6.558l-1.285 1.296"
          stroke={theme.dark ? '#B2F5EA' : '#667EEA'}
        />
      </g>
    </svg>
  )
}

export default Lightbulb
