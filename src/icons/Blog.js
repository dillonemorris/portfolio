import React from 'react'

const Blog = ({ color }) => {
  const stroke = color ? color : '#1A202C'
  return (
    <svg
      width="44"
      height="36"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <g
        stroke={stroke}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24.375 15.708v11.48c0 .667-.56 1.208-1.25 1.208H1.875c-.69 0-1.25-.541-1.25-1.209V4.23c0-.667.56-1.208 1.25-1.208H15M9.375 19.938l11.25-10.875" />
        <path d="M18.125 4.23c-1.25.149-8.143 6.63-3.75 10.874 1.535 1.485 4.922 1.209 9.054-2.779C27.56 8.338 29.375.605 29.375.605a34.758 34.758 0 00-7.762 2.128s-.988 4.517-3.488 4.517V4.23z" />
      </g>
    </svg>
  )
}

export default Blog
