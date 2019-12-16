import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const ReactIcon = ({ color }) => {
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
      <g fill="none" fillRule="evenodd">
        <path
          d="M31.063 2.571c3.873 2.237 2.509 11.854-3.048 21.479S14.81 39.665 10.938 37.429c-3.874-2.237-2.51-11.854 3.047-21.479S27.19.335 31.063 2.571z"
          stroke={iconColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.73 27.915C10.424 28.66.933 25.72.527 21.348c-.406-4.372 8.436-8.516 19.743-9.263 11.308-.746 20.798 2.195 21.205 6.567.407 4.37-8.436 8.516-19.743 9.263z"
          stroke={iconColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.78 23.325c5.008 10.165 12.3 16.915 16.29 15.08 3.99-1.835 3.157-11.564-1.85-21.73C23.212 6.51 15.92-.239 11.93 1.595c-3.988 1.833-3.157 11.564 1.85 21.73z"
          stroke={iconColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.75 16.969c1.723.994 2.335 3.156 1.368 4.831-.967 1.675-3.145 2.226-4.868 1.231-1.723-.994-2.335-3.156-1.368-4.831.967-1.675 3.145-2.226 4.868-1.231z"
          fill={iconColor}
        />
      </g>
    </svg>
  )
}

export default ReactIcon
