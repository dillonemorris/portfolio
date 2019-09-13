import styled from 'styled-components'

export const Container = styled.div`
  :hover {
    > .hover-styles {
      color: rgba(65, 131, 215, 1);
      transition-delay: 0s, 0s, 0.3s;
    }
  }
`

export const Date = styled.div`
  color: #486581;
  font-family: Plex Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif !important;
  font-size: 13px;
  letter-spacing: 0.5px;
  font-weight: 200;
  padding-bottom: 4px;
`

export const Title = styled.div`
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  font-size: 26px;
  font-weight: 600;
  color: #11181e;
  letter-spacing: 0.2px;
  padding-bottom: 8px;
  line-height: 36px;
  transition: all 170ms ease-in-out;
`

export const Excerpt = styled.div`
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  color: #486581;
  font-size: 18px;
  letter-spacing: 0.4px;
  padding-bottom: 30px;
  line-height: 1.6;
`
