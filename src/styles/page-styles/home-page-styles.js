import styled from 'styled-components'
import { Container } from '../../components/globals'

export const MyContainer = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing._16};
  padding-bottom: ${({ theme }) => theme.spacing._6};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    padding-top: ${({ theme }) => theme.spacing._24};
    padding-bottom: ${({ theme }) => theme.spacing._12};
  }
`

// layout
export const TriangleBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 210vh;
`

export const Landing = styled.div`
  height: 70vh;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    height: 80vh;
  }

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    height: 96vh;
  }
`

// hero
export const Intro = styled.p`
  color: ${({ theme }) => theme.colors.body};
  font-size: ${({ theme }) => theme.fontSize.text_base};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  margin-bottom: ${({ theme }) => theme.spacing._0};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: ${({ theme }) => theme.fontSize.text_xl};
    margin-bottom: ${({ theme }) => theme.spacing._1};
  }
`

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.heading};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: ${({ theme }) => theme.fontSize.text_3xl};
  letter-spacing: ${({ theme }) => theme.letterSpacing.tight};
  line-height: ${({ theme }) => theme.lineHeight.tight};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    font-size: 6vh;
    line-height: ${({ theme }) => theme.lineHeight.none};
  }
`

export const HeroHeading = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.max_w_3xl};
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.spacing._24};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    padding-top: 0;
  }
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
  display: none;

  :hover {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.mq.lg}) {
    display: flex;
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
  display: none;
  justify-content: ${({ position }) =>
    position === 'right' ? 'flex-end' : 'flex-start'};

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    display: flex;
  }
`

export const BigBlobContainer = styled.div`
  opacity: 0;
  right: 0;
  transform: translateY(-180px);
  position: absolute;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    opacity: 1;
  }
`

export const SmallCirclesContainer = styled.div`
  display: none;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing._12};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    display: flex;
  }
`

export const Img = styled.img`
  width: 140px;
  padding: 18px 0px;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    padding: 22px 0px;
  }
`

export const FeatureCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2.5rem 3rem;
  padding: ${({ theme }) => theme.spacing._8} 0
    ${({ theme }) => theme.spacing._20};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    grid-gap: 4rem 3rem;
    padding: ${({ theme }) => theme.spacing._20} 0;
  }
`

export const SectionHeading = styled.div`
  display: flex;
  align-items: center;
`

export const BlogHeading = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacing._4};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    padding-bottom: ${({ theme }) => theme.spacing._8};
  }
`

export const BlogCTA = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0;

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    margin-left: ${({ theme }) => theme.spacing._12};
  }
`

export const ProjectsDescription = styled.div`
  margin-left: 0;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    margin-left: 3.2rem;
  }
`

export const ProjectsContainer = styled.div`
  align-items: flex-start;
  padding-top: ${({ theme }) => theme.spacing._8};

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0rem 3rem;
  }

  @media (min-width: ${({ theme }) => theme.mq.lg}) {
    grid-gap: 0rem 8rem;
  }
`

export const BlogCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: ${({ theme }) => theme.spacing._6};

  @media (min-width: ${({ theme }) => theme.mq.lg}) {
    grid-gap: ${({ theme }) => theme.spacing._10};
  }
`

export const ProjectCardContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing._8};

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    padding-top: ${({ theme }) => theme.spacing._0};
  }
`

export const TrianglesContainer = styled.div`
  width: 100px;
  margin-left: auto;
`

export const SquaresContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    margin-right: ${({ theme }) => theme.spacing._4};
    display: flex;
  }
`

export const TriangleWiggleContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    display: flex;
  }
`

export const IconContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    display: flex;
  }
`

export const HeadingContainer = styled.div`
  margin-left: 0;

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    margin-left: ${({ theme }) => theme.spacing._2};
  }
`
