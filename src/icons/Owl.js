import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Owl = ({ color }) => {
  const {
    colors: { body },
  } = useContext(ThemeContext)
  const iconColor = color ? color : body
  return (
    <svg width="36" height="42" xmlns="http://www.w3.org/2000/svg">
      <g
        stroke={iconColor}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18.718 10.172l11.068-4.063a.47.47 0 000-.891L18.718 1.145a2.086 2.086 0 00-1.436 0L5 5.662l12.282 4.51c.462.17.974.17 1.436 0zM27 13.299V7.13M9 7.13V13.3M5 5.662v6.682M24 12.344c2.762 0 5 2.136 5 4.773 0 2.636-2.238 4.773-5 4.773s-5-2.137-5-4.773c0-2.637 2.238-4.773 5-4.773zM12 12.344c2.762 0 5 2.136 5 4.773 0 2.636-2.238 4.773-5 4.773s-5-2.137-5-4.773c0-2.637 2.238-4.773 5-4.773zM12 16.162c-.552 0-1 .428-1 .955M13 17.117c0-.527-.448-.955-1-.955M12 18.071c.552 0 1-.427 1-.954M11 17.117c0 .527.448.954 1 .954M24 16.162c-.552 0-1 .428-1 .955M25 17.117c0-.527-.448-.955-1-.955M24 18.071c.552 0 1-.427 1-.954M23 17.117c0 .527.448.954 1 .954" />
        <path d="M13.702 21.603L18 25.708l4.3-4.107" />
        <path d="M29 24.276v6.205c0 5.8-4.924 10.5-11 10.5s-11-4.7-11-10.5v-6.205" />
        <path d="M28 19.98h1c3.314 0 6 2.564 6 5.728v3.818c0 5.271-4.478 9.545-10 9.545h-.676M8 19.98H7c-3.314 0-6 2.564-6 5.728v3.818c0 5.271 4.478 9.545 10 9.545h.676" />
      </g>
    </svg>
  )
}

export default Owl
