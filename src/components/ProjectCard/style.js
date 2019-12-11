import styled from 'styled-components'

export const InfoContainer = styled.div`
  padding: ${({ theme }) => theme.spacing._6};
  padding-top: ${({ theme }) => theme.spacing._2};
`

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  left: 20px;
  top: 20px;
  height: 100%;
  box-shadow: ${({ theme }) => theme.shadow.xl};
`
