import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  letter-spacing: 0.35px;
  font-size: 18px;
  padding-bottom: 14px;
  line-height: 1.5;

  @media (min-width: 600px) {
    font-size: 21px;
    padding-bottom: 18px;
  }

  :hover .title {
    color: rgba(65, 131, 215, 1);
    transition-delay: 0s, 0s, 0.3s;
  }
  :hover .category {
    color: rgba(65, 131, 215, 1);
    transition-delay: 0s, 0s, 0.3s;
  }
`

const CardImageWrapper = styled.div`
  :hover {
    cursor: pointer;
  }
`

const CardImage = styled.img`
  height: 240px;
  box-shadow: 0 16px 16px rgba(103, 110, 144, 0.05),
    0 8px 8px rgba(103, 110, 144, 0.05), 0 4px 4px rgba(103, 110, 144, 0.05),
    0 2px 2px rgba(103, 110, 144, 0.05);
`

const TitleCategory = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4px;
`

const TitleLink = styled.a`
  display: flex;
  color: #11181e;
  font-size: 21px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.15s ease-out;

  @media (min-width: 600px) {
    font-size: 22px;
  }

  :hover {
    color: #4183d7;
  }
`

const Category = styled.span`
  color: #486581;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`

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
