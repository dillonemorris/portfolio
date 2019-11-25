import React from 'react'

const FontSettings = ({ setFontStyle, setLargeFont, fonts }) => {
  return (
    <>
      <div>
        <button onClick={() => setFontStyle(fonts.default)}>default</button>
        <button onClick={() => setFontStyle(fonts.serif)}>serif</button>
        <button onClick={() => setFontStyle(fonts.mono)}>mono</button>
      </div>
      <div>
        <button onClick={() => setLargeFont(false)}>small</button>
        <button onClick={() => setLargeFont(true)}>large</button>
      </div>
    </>
  )
}

export default FontSettings
