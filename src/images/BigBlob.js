import React from 'react'

const BigBlob = ({ color }) => {
  const fill = color ? color : '#4C51BF'
  return (
    <svg
      width="547px"
      height="608px"
      viewBox="0 0 397 458"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill={fill}
        fillRule="evenodd"
      >
        <g
          id="Home-(Light-Theme)"
          transform="translate(-810.000000, -667.000000)"
          fill={fill}
          fillRule="nonzero"
        >
          <g id="blob-shape-(1)" transform="translate(810.000000, 667.000000)">
            <path
              d="M440.945438,52.0169452 C477.752096,98.3377232 472.936271,178.789601 457.112848,259.821939 C441.289426,340.97037 414.458405,422.583169 361.255012,448.355632 C308.05162,474.128095 228.361194,444.176313 154.862542,406.446356 C81.2492278,368.7164 13.713025,323.208267 1.90278922,266.207009 C-9.79278409,209.089658 34.2376096,140.595275 84.3451148,91.2561005 C134.45262,42.0330181 190.637237,11.8490525 258.058777,2.79386286 C325.365655,-6.26132681 404.024119,5.81225942 440.945438,52.0169452 Z"
              id="Path"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default BigBlob
