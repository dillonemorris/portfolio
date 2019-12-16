import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const UIUX = ({ color }) => {
  const {
    colors: { body },
  } = useContext(ThemeContext)
  const iconColor = color ? color : body
  return (
    <svg
      width="58"
      height="56"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 42"
    >
      <g
        stroke={iconColor}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.375.792h33.25c.874 0 1.583.709 1.583 1.583v33.25c0 .874-.709 1.583-1.583 1.583H2.375c-.874 0-1.583-.709-1.583-1.583V2.375c0-.874.709-1.583 1.583-1.583z" />
        <path d="M12.667 10.292a7.126 7.126 0 11-.001 14.25 7.126 7.126 0 010-14.25z" />
        <path d="M22.958 5.542h-7.916c-.874 0-1.584.709-1.584 1.583v3.211a7.127 7.127 0 016.29 6.289h3.21c.874 0 1.584-.71 1.584-1.583V7.125c0-.874-.71-1.583-1.584-1.583zM29.292 10.292h4.75M29.292 13.458h3.166M5.542 29.292h14.25M5.542 32.458h4.75M22.958 20.583l5.257 4.381M29.292 24.542h3.166c.874 0 1.584.709 1.584 1.583v6.333c0 .874-.71 1.584-1.584 1.584h-3.166c-.874 0-1.584-.71-1.584-1.584v-6.333c0-.874.71-1.583 1.584-1.583zM13.458 32.458h1.584M29.292 7.125h4.75" />
      </g>
    </svg>
  )
}

export default UIUX
