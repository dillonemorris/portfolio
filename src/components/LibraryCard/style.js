import styled from 'styled-components'
import '../../styles/react-card-flipper.css'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CardFront = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 16px 16px rgba(103, 110, 144, 0.05),
    0 8px 8px rgba(103, 110, 144, 0.05), 0 4px 4px rgba(103, 110, 144, 0.05),
    0 2px 2px rgba(103, 110, 144, 0.05);
  height: 384px;

  @media (min-width: 960px) {
    height: 340px;
  }
`

export const Screenshot = styled.img`
  width: 100%;
  height: 384px;

  @media (min-width: 960px) {
    height: 340px;
  }
`

export const CardBack = styled.div`
  align-content: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  height: 384px;
  box-shadow: 0 16px 16px rgba(103, 110, 144, 0.05),
    0 8px 8px rgba(103, 110, 144, 0.05), 0 4px 4px rgba(103, 110, 144, 0.05),
    0 2px 2px rgba(103, 110, 144, 0.05);

  @media (min-width: 960px) {
    height: 340px;
  }
`

export const Quote = styled.div`
  padding: 20px;
  color: #486581;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  letter-spacing: 0.5px;
  line-height: 1.3;
  font-size: 24px;

  @media (min-width: 475px) {
    font-size: 18px;
  }
`

export const CardBackBottom = styled.div`
  display: flex;
  padding: 10px 0px 20px 0px;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
`

export const Title = styled.div`
  color: #11181e;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  letter-spacing: 0.5px;
  line-height: 1.3;
  font-size: 16px;
  padding-top: 4px;
  margin-bottom: 0px;
  text-align: center;
  padding: 0px 10px;
`

export const Author = styled.div`
  padding-bottom: 4px;
  color: #486581;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  font-size: 13px;
  letter-spacing: 0.5px;
`
