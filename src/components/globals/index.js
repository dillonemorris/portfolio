import styled from 'styled-components'
import MyLink from '../MyLink'

export const Link = styled(MyLink)`
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
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.colors.linkBorderHover};
    background: ${({ background, theme }) =>
      background ? background : theme.colors.backgroundLinkHover};
  }
`

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.body};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: ${({ theme }) => theme.fontSize.text_5xl};
  line-height: 1.3;
  margin: 0;
  padding: 0;
`

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.body};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.text_4xl};
  line-height: 1.3;
  margin: 0;
  padding: 0;
`

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.body};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.text_2xl};
  line-height: 1.5;
  margin: 0;
  padding: 0;
`

export const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.body};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.text_xl};
  line-height: 1.4;
  margin: 0;
  padding: 0;
`

export const H5 = styled.h5`
  color: ${({ theme }) => theme.colors.body};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.text_lg};
  line-height: 1.4;
  margin: 0;
  padding: 0;
`

export const H6 = styled.h6`
  color: ${({ theme }) => theme.colors.body};
  font-weight: 600;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.text_base};
  line-height: 1.5;
  margin: 0;
  padding: 0;
`

export const LargeBody = styled.p`
  color: ${({ theme }) => theme.colors.body};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.text_xl};
  line-height: ${({ theme }) => theme.lineHeight.snug};
  margin: 0;
  padding: 0;
`

export const Body = styled.p`
  color: ${({ theme }) => theme.colors.body};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.text_base};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  margin: 0;
  padding: 0;
`
