import styled from 'styled-components'
import { H2, LargeBody } from '../globals'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing._12} 0;

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    flex-direction: row;
    padding-right: 0;
    padding-left: 0;
    padding-top: ${({ theme }) => theme.spacing._16};
    padding-bottom: ${({ theme }) => theme.spacing._8};
  }
`

export const Img = styled.img`
  order: 1;

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    max-height: 350px;
    margin-right: ${({ theme }) => theme.spacing._6};
    order: 0;
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled(H2)`
  display: flex;
  justify-content: center;
  width: 200px;
  background: ${({ theme }) => theme.colors.headingBackground};
  margin-bottom: 12px;
  margin-left: 0px;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    width: 280px;
  }

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    width: 320px;
    margin-left: -120px;
    margin-top: ${({ theme }) => theme.spacing._6};
    font-size: 48px;
  }

  @media (min-width: ${({ theme }) => theme.mq.lg}) {
    width: 320px;
    margin-top: ${({ theme }) => theme.spacing._24};
  }
`

export const FirstParagraph = styled(LargeBody)`
  padding-bottom: ${({ theme }) => theme.spacing._2};

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    padding-bottom: ${({ theme }) => theme.spacing._4};
  }

  @media (min-width: ${({ theme }) => theme.mq.lg}) {
    padding-bottom: ${({ theme }) => theme.spacing._6};
  }
`

export const SecondParagraph = styled(LargeBody)`
  padding-bottom: ${({ theme }) => theme.spacing._4};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    padding-bottom: ${({ theme }) => theme.spacing._12};
  }
`
