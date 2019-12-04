import styled from 'styled-components'

export const InfoContainer = styled.div`
  padding: ${({ theme }) => theme.spacing._6};
`

export const Container = styled.div`
  background: #fff;
  position: relative;
  left: 20px;
  top: 20px;
  height: 100%;
  box-shadow: ${({ theme }) => theme.shadow.xl};
`
