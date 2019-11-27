import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primaryLink};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ fontSize, theme }) =>
    fontSize ? fontSize : theme.colors.text_base};
  border-bottom: 1px solid ${({ theme }) => theme.colors.linkBorder};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.hover};
  margin: 0;
  padding: 0;

  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.linkBorderHover};
    background: ${({ background, theme }) =>
      background ? background : theme.colors.backgroundLinkHover};
  }
`

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.primaryLink};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ fontSize, theme }) =>
    fontSize ? fontSize : theme.colors.text_base};
  border-bottom: 1px solid ${({ theme }) => theme.colors.linkBorder};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.hover};
  margin: 0;
  padding: 0;

  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.linkBorderHover};
    background: ${({ background, theme }) =>
      background ? background : theme.colors.backgroundLinkHover};
  }
`
