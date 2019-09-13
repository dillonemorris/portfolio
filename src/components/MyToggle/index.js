import React from 'react'
import Toggle from 'react-toggle'
import Light from '../../icons/Light'
import Dark from '../../icons/Dark'
import '../../styles/react-toggle.css'

const MyToggle = ({ darkMode, setDarkMode }) => (
  <Toggle
    checked={darkMode === true}
    name="DarkThemeEnabled"
    value="yes"
    onChange={() => setDarkMode(!darkMode)}
    icons={{
      checked: <Dark alt="Moon" style={{ pointerEvents: 'none' }} />,
      unchecked: <Light alt="Moon" style={{ pointerEvents: 'none' }} />,
    }}
  />
)

export default MyToggle
