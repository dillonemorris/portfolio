import React from 'react'

const Blob = ({ color }) => {
  const fill = color ? color : '#4C51BF'

  return (
    <svg width="389" height="114" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0c41.223 66.016 89.713 114 173.44 114C261.41 114 339.564 69.269 389 0H0z"
        fill={fill}
        fillRule="nonzero"
      />
    </svg>
  )
}

export default Blob
