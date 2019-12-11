import React from 'react'

const Contact = ({ color }) => {
  return (
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
      <g
        stroke={color}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.319 32.844l38.22-31.559M19.231 36.667l15.602 6.685a2.227 2.227 0 003.025-1.458L48.917 2.458a1.114 1.114 0 00-1.602-1.283l-45.1 24.258a2.232 2.232 0 00.179 4.015l7.916 3.396" />
        <path d="M10.319 32.844l5.416 15a1.68 1.68 0 002.982.35l6.018-9.167" />
        <path d="M48.54 1.285L19.23 36.665l-1.908 12.293" />
      </g>
    </svg>
  )
}

export default Contact
