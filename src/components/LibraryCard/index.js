import React from 'react'
import ReactCardFlipper from 'react-card-flipper'
import Button from '../Button'
import {
  Wrapper,
  CardFront,
  Screenshot,
  CardBack,
  Quote,
  CardBackBottom,
  Title,
  Author,
} from './style'

const LibraryCard = ({ title, author, screenshot, quote, page }) => (
  <Wrapper>
    <div>
      <ReactCardFlipper
        levitate
        height="340px"
        width="100%"
        behavior="click"
        className="cardOuter"
        innerCardClass="cardInner"
      >
        <CardFront>
          <div>
            <Screenshot src={screenshot} alt={'book cover'} />
          </div>
        </CardFront>
        <CardBack>
          <Quote>{quote}</Quote>
          <CardBackBottom>
            <Title>{title}</Title>
            <Author>{author}</Author>
            <Button
              color={'rgba(61, 118, 113, 1)'}
              border={'3px solid rgba(61, 118, 113, 1)'}
              boxShadowHover={'5px 5px rgba(61, 118, 113, 1)'}
              boxShadow={'5px 5px rgba(61, 118, 113, .4)'}
              text={'amazon'}
              fontSize={'13px'}
              padding={'2px 30px'}
              page={page}
            />
          </CardBackBottom>
        </CardBack>
      </ReactCardFlipper>
    </div>
  </Wrapper>
)

export default LibraryCard
