import styled from 'styled-components'

// layout
export const Background = styled.div`
  background-color: ${props => props.theme.colors.background};
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 210vh;
`
export const Container = styled.div`
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
  max-width: 1080px;

  @media (min-width: ${props => props.theme.mq.sm}) {
    margin: 0px auto;
  }
`

export const Landing = styled.div`
  height: 96vh;
`

// hero
export const Intro = styled.p`
  color: ${props => props.theme.colors.body};
  font-size: ${props => props.theme.fontSize.text_base};
  font-weight: ${props => props.theme.fontWeight.light};
  letter-spacing: ${props => props.theme.letterSpacing.wide};
  margin-bottom: ${props => props.theme.spacing._0};

  @media (min-width: ${props => props.theme.mq.sm}) {
    font-size: ${props => props.theme.fontSize.text_xl};
    margin-bottom: ${props => props.theme.spacing._1};
  }
`

export const Heading = styled.h1`
  color: ${props => props.theme.colors.heading};
  font-weight: ${props => props.theme.fontWeight.black};
  font-size: ${props => props.theme.fontSize.text_3xl};
  letter-spacing: ${props => props.theme.letterSpacing.tight};
  line-height: ${props => props.theme.lineHeight.tight};

  @media (min-width: ${props => props.theme.mq.sm}) {
    font-size: 7vh;
    line-height: ${props => props.theme.lineHeight.none};
  }
`

export const HeroHeadingContainer = styled.div`
  max-width: ${props => props.theme.maxWidth.max_w_3xl};
  display: flex;
  flex-direction: column;
`

export const CallToAction = styled.div`
  font-size: ${({ theme }) => theme.fontSize.text_xl};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 120px;
  margin-left: auto;
  width: 260px;

  :hover {
    cursor: pointer;
  }
`

export const DownArrowContainer = styled.div`
  margin: 2px auto;
  animation: float 2.4s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(8px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`

export const BlobContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BigBlobContainer = styled.div`
  right: 0;
  transform: translateY(-180px);
  position: absolute;
  overflow: hidden;
`

export const CheckerContainer = styled.div`
  /* position: relative;
  bottom: 200px;
  left: 60px; */
`

export const SmallCirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${props => props.theme.spacing._12};
`

export const TriangleContainer = styled.div`
  position: absolute;
`

export const Img = styled.img`
  width: 140px;
  padding: 18px 0px;

  @media (min-width: ${props => props.theme.mq.sm}) {
    padding: 22px 0px;
  }
`
