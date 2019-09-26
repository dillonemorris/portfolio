import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const Heading = styled.h1`
  color: #11181e;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 24px;
  margin-bottom: 12px;
  font-size: 36px;

  @media (min-width: 700px) {
    font-size: 48px;
  }
`

export const Subheading = styled.p`
  color: #486581;
  font-size: 18px;

  font-weight: 300;
  text-align: center;
  line-height: 24px;
  margin-bottom: 10px;
  letter-spacing: 0.7px;
  max-width: 400px;
`
