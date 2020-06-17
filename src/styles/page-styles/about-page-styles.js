import styled from 'styled-components'
import { Container, Body } from '../../components/globals'

export const MyContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const AboutContainer = styled(Container)`
  margin: auto;
  max-width: ${({ theme }) => theme.maxWidth.max_w_3xl};
  padding-top: ${({ theme }) => theme.spacing._32};
  padding-bottom: ${({ theme }) => theme.spacing._24};
`

export const AboutBody = styled(Body)`
  max-width: ${({ theme }) => theme.maxWidth.max_w_lg};
  margin-bottom: ${({ theme }) => theme.spacing._10};
`

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: 3rem;
`
