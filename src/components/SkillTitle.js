import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Title = styled.div`
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 20px;
  letter-spacing: 0.5px;
  color: #11181e;
`

const SkillTitle = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

export default SkillTitle
