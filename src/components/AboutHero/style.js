import styled from 'styled-components'
import { H2 } from '../globals'

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing._12} 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
    padding-right: 0;
    padding-left: 0;
    padding-top: ${({ theme }) => theme.spacing._16};
    padding-bottom: ${({ theme }) => theme.spacing._8};
  }
`

export const Img = styled.img`
  margin-bottom: 40px;

  @media (min-width: 700px) {
    max-height: 350px;
    margin-right: ${({ theme }) => theme.spacing._6};
    padding-bottom: 0px;
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled(H2)`
  display: flex;
  justify-content: center;
  width: 320px;
  background: ${({ theme }) => theme.colors.headingBackground};
  margin-top: ${({ theme }) => theme.spacing._24};
  margin-bottom: 12px;
  margin-left: -120px;

  @media (min-width: 700px) {
    font-size: 48px;
  }
`
