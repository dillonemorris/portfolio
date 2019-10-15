import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
  max-width: 1080px;

  @media (min-width: ${props => props.theme.mq.sm}) {
    margin: 0px auto;
  }
`

export const Intro = styled.p`
  color: ${props => props.theme.colors.gray600};
  font-size: ${props => props.theme.fontSize.text_base};
  font-weight: ${props => props.theme.fontWeight.light};
  letter-spacing: ${props => props.theme.letterSpacing.wide};
  margin-bottom: ${props => props.theme.margin.m_0};

  @media (min-width: ${props => props.theme.mq.sm}) {
    font-size: ${props => props.theme.fontSize.text_xl};
    margin-bottom: ${props => props.theme.margin.m_1};
  }
`

export const Heading = styled.h1`
  color: ${props => props.theme.colors.gray900};
  font-weight: ${props => props.theme.fontWeight.black};
  font-size: ${props => props.theme.fontSize.text_2xl};
  letter-spacing: ${props => props.theme.letterSpacing.normal};
  line-height: ${props => props.theme.lineHeight.tight};

  @media (min-width: ${props => props.theme.mq.sm}) {
    font-size: ${props => props.theme.fontSize.text_4xl};
    line-height: ${props => props.theme.lineHeight.none};
  }
`

export const MyContainer = styled.div`
  max-width: ${props => props.theme.maxWidth.max_w_xl};
  display: flex;
  margin-top: ${props => props.theme.margin.m_40};
  flex-direction: column;
  min-height: calc(100vh - 210px);
`

export const Img = styled.img`
  width: 140px;
  padding: 18px 0px;

  @media (min-width: ${props => props.theme.mq.sm}) {
    padding: 22px 0px;
  }
`
