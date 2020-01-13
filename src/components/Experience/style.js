import styled from 'styled-components'
import { H3 } from '../globals'

export const Heading = styled(H3)`
  margin-bottom: ${({ theme }) => theme.spacing._4};

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    font-size: 36px;
    margin-right: ${({ theme }) => theme.spacing._32};
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing._8} 0;

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    flex-direction: row;
    padding: ${({ theme }) => theme.spacing._24} 0;
    padding-bottom: ${({ theme }) => theme.spacing._40};
  }
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: ${({ theme }) => theme.spacing._8};
`
