import React from 'react'

const Dribbble = ({ color }) => {
  const stroke = color ? color : '#4C51BF'
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 26 26"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Home-(Light-Theme)"
          transform="translate(-1046.000000, -740.000000)"
          stroke={stroke}
        >
          <g
            id="streamline-icon-designer-community-dribbble@24x24"
            transform="translate(1046.000000, 740.000000)"
          >
            <path
              d="M13,0.541666667 C19.88025,0.541666667 25.4583333,6.11975 25.4583333,13 C25.4583333,19.88025 19.88025,25.4583333 13,25.4583333 C6.11975,25.4583333 0.541666667,19.88025 0.541666667,13 C0.541666667,6.11975 6.11975,0.541666667 13,0.541666667 Z"
              id="Path"
            ></path>
            <path
              d="M7.06116667,2.04425 C13.5384167,6.95716667 17.3398333,14.6206667 17.3333417,22.75 C17.3333417,23.4108333 17.3095,24.0640833 17.26075,24.7108333"
              id="Path"
            ></path>
            <path
              d="M22.3004167,4.71141667 C17.4665833,9.34375 11.0283333,11.9253333 4.33333333,11.9166884 C3.08966667,11.9166884 1.84708333,11.8289167 0.615333333,11.6534167"
              id="Path"
            ></path>
            <path
              d="M3.31391667,20.8335833 C8.151,16.16875 14.612,13.5655 21.333,13.5752227 C22.7034167,13.5828333 24.0716667,13.6825 25.428,13.87425"
              id="Path"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Dribbble
