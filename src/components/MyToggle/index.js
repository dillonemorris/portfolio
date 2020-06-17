import React from 'react'
import Toggle from 'react-toggle'
import '../../styles/react-toggle.css'

const MyToggle = ({ toggle, setToggle, icons }) => {
  return (
    <Toggle
      checked={toggle === true}
      name="DarkThemeEnabled"
      value="yes"
      onChange={() => setToggle(!toggle)}
      icons={icons}
    />
  )
}

export default MyToggle
