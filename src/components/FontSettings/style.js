import styled from 'styled-components'

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.info};
  border-radius: ${({ theme }) => theme.borderRadius.secondary};
  padding: ${({ theme }) => theme.spacing._2};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  font-family: ${({ fontStyle }) => fontStyle};
  font-size: ${({ theme }) => theme.fontSize.text_sm};
  color: ${({ active, theme }) =>
    active ? theme.colors.secondaryLinkHover : theme.colors.secondaryLink};
  padding: ${({ theme }) => theme.spacing._1} ${({ theme }) => theme.spacing._3};
  background: ${({ active, theme }) =>
    active ? theme.colors.accentLink : 'transparent'};
  border-radius: ${({ theme }) => theme.borderRadius.secondary};
  border: none;
  width: 70px;
  white-space: nowrap;
  transition: ${({ theme }) => theme.transitions.hover};

  :hover {
    color: ${({ theme }) => theme.colors.secondaryLinkHover};
    background-color: ${({ theme }) => theme.colors.accentLink};
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`
