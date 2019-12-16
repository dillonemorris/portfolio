import styled from 'styled-components'

export const PatternBackground = styled.div`
  background-image: url(${props => props.bg});
  background-color: #fff;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0px auto;
  max-width: 1200px;
  padding: 0px 1.0875rem 0rem;
`

export const Closing = styled.div`
  display: flex;
  flex-direction: column;
  color: #486581;
  line-height: 1.5;
  padding: 80px 0px 0px;
`

export const Heading = styled.h1`
  color: #11181e;
  font-weight: 500;
  font-size: 32px;
  letter-spacing: 0.3px;

  @media (min-width: 700px) {
    font-size: 40px;
  }
`

export const ClosingContainer = styled.div`
  padding-bottom: 48px;
`

export const Description = styled.p`
  font-size: 20px;
  padding-bottom: 10px;
  margin-bottom: 0px;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  max-width: 250px;
  color: #11181e;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid #bcd9ff;
  transition: background 0.4s ease-out;

  :hover {
    background: #bcd9ff;
  }
`
