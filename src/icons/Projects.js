import React from 'react'

const Projects = ({ color }) => {
  const fill = color ? color : '#1A202C'
  return (
    <svg
      width="44"
      height="36"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M.708 6.922h26.917M4.958 3.735a.354.354 0 10.354.354v-.006a.354.354 0 00-.354-.354M7.792 3.735a.354.354 0 10.354.354v-.006a.354.354 0 00-.354-.354M10.625 3.735a.354.354 0 10.354.354v-.006a.354.354 0 00-.354-.354"
          stroke={fill}
        />
        <path
          d="M3.542 1.256h21.25a2.833 2.833 0 012.833 2.833v14.167a2.833 2.833 0 01-2.833 2.833H3.542a2.833 2.833 0 01-2.834-2.833V4.089a2.833 2.833 0 012.834-2.833z"
          stroke={fill}
        />
        <path
          d="M27.625 4.083a2.833 2.833 0 012.833 2.834v14.166a2.833 2.833 0 01-2.833 2.834H6.375a2.833 2.833 0 01-2.833-2.834"
          stroke={fill}
        />
        <path
          d="M30.458 6.917a2.833 2.833 0 012.834 2.833v14.167a2.833 2.833 0 01-2.834 2.833H9.208a2.833 2.833 0 01-2.833-2.833"
          stroke={fill}
        />
      </g>
    </svg>
  )
}

export default Projects
