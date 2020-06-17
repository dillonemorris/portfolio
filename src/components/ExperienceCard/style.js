import styled from 'styled-components'
import { SmallBody } from '../globals'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem 1.25rem;
  box-shadow: ${({ theme }) => theme.shadow.xl};
  border-left: 4px solid ${({ borderColor }) => borderColor};

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    padding: 1.5rem 2.25rem;
  }
`

export const Time = styled(SmallBody)`
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing.wider};
  padding-bottom: ${({ theme }) => theme.spacing._1};
`

export const CompanyLocation = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing._1};
  margin-bottom: ${({ theme }) => theme.spacing._2};

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    margin-bottom: ${({ theme }) => theme.spacing._4};
  }
`

export const Company = styled(SmallBody)`
  margin-right: ${({ theme }) => theme.spacing._4};
`
