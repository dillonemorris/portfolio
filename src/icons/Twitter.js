import React from 'react'

const Twitter = ({ color }) => {
  const stroke = color ? color : '#4C51BF'
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 27 26"
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
          transform="translate(-1045.000000, -798.000000)"
          stroke={stroke}
        >
          <g
            id="streamline-icon-social-media-twitter@24x24"
            transform="translate(1046.000000, 798.000000)"
          >
            <path
              d="M26,4.96463158 L23.6363636,4.28042105 L24.8181818,1.54357895 L21.9061818,2.50147368 C19.7682727,0.191578947 16.4178182,0.327052632 14.4229091,2.80252632 C13.5010909,3.94652632 12.9929091,5.45452632 13,7.01726316 L13,8.38568421 C8.81754545,9.38463158 5.15981818,6.74357895 1.77272727,2.22778947 C1.18181818,5.87736842 1.77272727,8.61421053 3.54545455,10.4383158 L0,9.75410526 C0.478636364,12.5853684 1.60963636,14.8172632 4.72727273,15.2277895 L1.77272727,16.5962105 C2.95454545,19.3330526 4.80527273,19.7572632 7.68181818,20.0172632 C5.44463636,21.8687368 2.74890909,22.828 0,22.7541053 C15.0740909,30.5116842 23.6363636,19.1086316 23.6363636,9.06989474 L23.6363636,7.25263158 L26,4.96463158 Z"
              id="Path"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Twitter
