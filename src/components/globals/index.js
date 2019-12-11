import styled from 'styled-components'
import MyLink from '../MyLink'

export const Background = styled.div`
  background-color: ${({ color, theme }) =>
    color ? color : theme.colors.background};
  background-image: ${({ bg }) => (bg ? `url(${bg})` : 'none')};
  background-position: ${({ position }) => (position ? position : 'initial')};
  background-size: ${({ size }) => (size ? size : 'auto')};
  background-repeat: no-repeat;
`

export const Container = styled.div`
  background: ${({ color }) => (color ? color : 'none')};
  padding: 0px 1.0875rem 1.45rem;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : 0)};
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom : 0)};
  max-width: 1080px;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    margin: 0px auto;
  }
`

export const Link = styled(MyLink)`
  color: ${({ theme }) => theme.colors.primaryLink};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ lg, theme }) =>
    lg ? theme.fontSize.text_xl.mobile : theme.fontSize.text_base.mobile};
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

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${({ lg, theme }) =>
      lg ? theme.fontSize.text_xl.desktop : theme.fontSize.text_base.desktop};
  }
`

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.body};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: ${({ theme }) => theme.fontSize.text_5xl.mobile};
  line-height: 1.3;
  margin: 0;
  padding: 0;
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom : 0)};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${({ theme }) => theme.fontSize.text_5xl.desktop};
  }
`

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.body};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.text_4xl.mobile};
  line-height: 1.3;
  margin: 0;
  padding: 0;
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom : 0)};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${({ theme }) => theme.fontSize.text_4xl.desktop};
  }
`

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.body};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.text_3xl.mobile};
  line-height: 1.5;
  margin: 0;
  padding: 0;
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom : 0)};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${({ theme }) => theme.fontSize.text_3xl.desktop};
  }
`

export const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.body};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.text_2xl.mobile};
  line-height: 1.4;
  margin: 0;
  padding: 0;
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom : 0)};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${({ theme }) => theme.fontSize.text_2xl.desktop};
  }
`

export const H5 = styled.h5`
  color: ${({ theme }) => theme.colors.body};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.text_xl.mobile};
  line-height: 1.4;
  margin: 0;
  padding: 0;
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom : 0)};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${({ theme }) => theme.fontSize.text_xl.desktop};
  }
`

export const H6 = styled.h6`
  color: ${({ theme }) => theme.colors.body};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.text_base.mobile};
  line-height: 1.5;
  margin: 0;
  padding: 0;
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom : 0)};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${({ theme }) => theme.fontSize.text_base.desktop};
  }
`

export const LargeBody = styled.p`
  color: ${({ theme }) => theme.colors.body};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.text_xl.mobile};
  line-height: ${({ theme }) => theme.lineHeight.snug};
  margin: 0;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : 0)};
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom : 0)};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${({ theme }) => theme.fontSize.text_xl.desktop};
  }
`

export const Body = styled.p`
  color: ${({ theme, color }) => (color ? color : theme.colors.body)};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.text_base.mobile};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  margin: 0;
  padding: 0;
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom : 0)};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${({ theme }) => theme.fontSize.text_base.desktop};
  }
`

export const SmallBody = styled.p`
  color: ${({ theme, color }) => (color ? color : theme.colors.body)};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.text_sm.mobile};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  margin: 0;
  padding: 0;
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom : 0)};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${({ theme }) => theme.fontSize.text_sm.desktop};
  }
`
