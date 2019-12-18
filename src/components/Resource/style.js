import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  letter-spacing: 0.35px;
  font-size: 18px;
  padding-bottom: 14px;
  line-height: 1.5;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
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

export const CardImageWrapper = styled.div`
  :hover {
    cursor: pointer;
  }
`

export const CardImage = styled.img`
  height: 240px;
  box-shadow: 0 16px 16px rgba(103, 110, 144, 0.05),
    0 8px 8px rgba(103, 110, 144, 0.05), 0 4px 4px rgba(103, 110, 144, 0.05),
    0 2px 2px rgba(103, 110, 144, 0.05);
`

export const TitleCategory = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4px;
`

export const TitleLink = styled.a`
  display: flex;
  color: #11181e;
  font-size: 21px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.15s ease-out;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: 22px;
  }

  :hover {
    color: #4183d7;
  }
`

export const Category = styled.span`
  color: #486581;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`
