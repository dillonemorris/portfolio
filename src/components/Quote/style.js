import styled from 'styled-components'

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing._4};
  margin: ${({ theme }) => theme.spacing._4} 0;
  border-left: 4px solid ${({ theme }) => theme.colors.border};
  font-style: italic;
`
