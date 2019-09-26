import styled from 'styled-components'

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
  padding-bottom: 36px;
`

export const ResourceContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  padding-bottom: 60px;
`
