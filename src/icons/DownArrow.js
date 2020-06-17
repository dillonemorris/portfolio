import React from 'react'

const DownArrow = ({ color }) => {
  const stroke = color ? color : '#1A202C'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
      <g
        stroke={stroke}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16.4 7.5h5.308a.5.5 0 01.336.87l-9.707 8.824a.5.5 0 01-.672 0L1.957 8.368a.5.5 0 01.336-.87H7.6" />
        <path d="M2.293 1.5h19.414a.5.5 0 01.336.87l-9.707 8.824a.5.5 0 01-.672 0L1.957 2.368a.5.5 0 01.336-.868zM16.4 13.5h5.308a.5.5 0 01.336.87l-9.707 8.824a.5.5 0 01-.672 0l-9.708-8.826a.5.5 0 01.336-.87H7.6" />
      </g>
    </svg>
  )
}

export default DownArrow
