import React from 'react'

const Toggle = ({ darkMode, setDarkMode }) => {
  return <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
}

export default Toggle
