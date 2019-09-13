import styled from 'styled-components'

export const Container = styled.div`
  font-family: Plex Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif !important;
  font-weight: 300;
  font-size: 14px;
  background-color: #fff;
  padding: 8px 28px;
  border-radius: 32px;
  text-align: center;
  margin-right: 20px;
  margin-bottom: 20px;
  letter-spacing: 0.4px;
  box-shadow: 0 16px 16px rgba(103, 110, 144, 0.05),
    0 8px 8px rgba(103, 110, 144, 0.05), 0 4px 4px rgba(103, 110, 144, 0.05),
    0 2px 2px rgba(103, 110, 144, 0.05);
  color: ${props => (props.color ? props.color : '#4183d7')};
`
