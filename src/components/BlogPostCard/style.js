import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing._10};
  padding-bottom: ${({ theme }) => theme.spacing._4};
  border-top: 3px solid ${({ theme }) => theme.colors.backgroundLinkHover};
  height: 100%;
  background: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  transition: ${({ theme }) => theme.transitions.hover};
  :hover {
    box-shadow: ${({ theme }) => theme.shadow.xl};
  }
`

export const Date = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #11181e;
  letter-spacing: 0.2px;
  padding-bottom: 6px;
  line-height: 28px;
  transition: all 170ms ease-in-out;
`

export const Excerpt = styled.div`
  color: #486581;
  font-size: 18px;
  letter-spacing: 0.4px;
  padding-bottom: 20px;
  line-height: 1.6;
`
