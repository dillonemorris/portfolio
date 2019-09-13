import React from 'react'
import {
  Wrapper,
  CardImageWrapper,
  CardImage,
  TitleCategory,
  TitleLink,
  Category,
} from './style'

const Resource = ({ title, category, link, image }) => (
  <Wrapper>
    <CardImageWrapper>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CardImage style={{ width: '100%' }} src={image} alt="Resource logo" />
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

export default Resource
