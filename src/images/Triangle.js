import React from 'react'

const Triangle = ({ color }) => {
  const fill = color ? color : '#B2F5EA'

  return (
    <svg width="660" height="394" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M200.516.288l458.919 113.727-695.902 295.393z"
        fill={fill}
        fill-rule="nonzero"
        opacity=".647"
      />
    </svg>
  )
}

export default Triangle
