import React, { useEffect } from 'react'
import Toggle from 'react-toggle'
import Light from '../../icons/Light'
import Dark from '../../icons/Dark'
import '../../styles/react-toggle.css'

const MyToggle = ({ toggle, setToggle }) => {
  return (
    <Toggle
      checked={toggle === true}
      name="DarkThemeEnabled"
      value="yes"
      onChange={() => setToggle(!toggle)}
      icons={{
        checked: <Dark alt="Moon" style={{ pointerEvents: 'none' }} />,
        unchecked: <Light alt="Sun" style={{ pointerEvents: 'none' }} />,
      }}
    />
  )
}

export default MyToggle
