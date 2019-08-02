import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

const Heading = styled.h1`
  color: #11181e;
  font-weight: 600;
  font-family: Inter UI -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  letter-spacing: 1px;
  margin-top: 24px;
  margin-bottom: 12px;
  font-size: 36px;

  @media (min-width: 700px) {
    font-size: 48px;
  }
`

const Subheading = styled.p`
  color: #486581;
  font-size: 18px;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  font-weight: 300;
  text-align: center;
  line-height: 24px;
  margin-bottom: 10px;
  letter-spacing: 0.7px;
  max-width: 340px;
`

const WritingHeader = () => (
  <Container>
    <Heading>Writing</Heading>
    <Subheading>
      My thoughts on career development, design, Javascript, and more
    </Subheading>
  </Container>
)

export default WritingHeader
