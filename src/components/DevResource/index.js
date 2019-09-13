import React from 'react'
import {
  Wrapper,
  CardImageWrapper,
  ImageWrapper,
  TitleCategory,
  TitleLink,
  Category,
} from './style'

const DevResource = ({ title, category, link, image }) => (
  <Wrapper>
    <CardImageWrapper>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ImageWrapper
          style={{ width: '100%' }}
          src={image}
          alt={'resource logo'}
        />
      </a>
    </CardImageWrapper>
    <TitleCategory>
      <TitleLink
        className="title"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </TitleLink>{' '}
      <Category className="category">{category}</Category>
    </TitleCategory>
  </Wrapper>
)

export default DevResource
