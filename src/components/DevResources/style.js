import styled from 'styled-components'

export const Background = styled.div`
  background-color: #fff;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

export const HeadingContainer = styled.div`
  max-width: 1080px;
  margin: auto;
  padding: 0px 1.0875rem 0px;
`

export const Heading = styled.h1`
  color: #11181e;
  font-weight: 600;
  
  font-size: 28px;
  padding-top: 60px;
  padding-bottom: 8px;
  margin-bottom: 0px;
`

export const Subheading = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: #486581;
  letter-spacing: 0.5px;
  padding-bottom: 20px;
  line-height: 1.4;
`

export const Container = styled.div`
  max-width: 1080px;
  margin: auto;
  padding: 20px 1.0875rem 60px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  padding-bottom: 60px;
`
