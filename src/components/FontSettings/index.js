import React from 'react'
import { Button, Bar, ButtonContainer } from './style'
import MyToggle from '../MyToggle'

const FontSettings = ({ setLargeFont, largeFont, setFontStyle, fonts }) => {
  return (
    <Bar>
      <ButtonContainer>
        <Button
          fontStyle={fonts.default}
          onClick={() => setFontStyle(fonts.default)}
        >
          default
        </Button>
        <Button
          fontStyle={fonts.serif}
          onClick={() => setFontStyle(fonts.serif)}
        >
          serif
        </Button>
        <Button fontStyle={fonts.mono} onClick={() => setFontStyle(fonts.mono)}>
          mono
        </Button>
      </ButtonContainer>

      <MyToggle toggle={largeFont} setToggle={setLargeFont} />
    </Bar>
  )
}

export default FontSettings
