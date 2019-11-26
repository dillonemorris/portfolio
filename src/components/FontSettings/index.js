import React from 'react'
import { Button, Bar, ButtonContainer } from './style'
import FontSizeLarge from '../../icons/FontSizeLarge'
import FontSizeSmall from '../../icons/FontSizeSmall'
import MyToggle from '../MyToggle'

const FontSettings = ({
  largeFont,
  setLargeFont,
  fontStyle,
  setFontStyle,
  fonts,
}) => {
  return (
    <Bar>
      <ButtonContainer>
        <Button
          active={fontStyle === fonts.default}
          fontStyle={fonts.default}
          onClick={() => setFontStyle(fonts.default)}
        >
          Default
        </Button>
        <Button
          active={fontStyle === fonts.serif}
          fontStyle={fonts.serif}
          onClick={() => setFontStyle(fonts.serif)}
        >
          Serif
        </Button>
        <Button
          active={fontStyle === fonts.mono}
          fontStyle={fonts.mono}
          onClick={() => setFontStyle(fonts.mono)}
        >
          Mono
        </Button>
      </ButtonContainer>

      <MyToggle
        toggle={largeFont}
        setToggle={setLargeFont}
        icons={{
          checked: (
            <FontSizeSmall
              alt="Letter 'A' Small"
              style={{ pointerEvents: 'none' }}
            />
          ),
          unchecked: (
            <FontSizeLarge
              alt="Letter 'A' Large"
              style={{ pointerEvents: 'none' }}
            />
          ),
        }}
      />
    </Bar>
  )
}

export default FontSettings
