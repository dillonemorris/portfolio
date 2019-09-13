import React from 'react'
import { Container } from './style'

const SkillPill = ({ className, text, fontSize, color }) => (
  <Container color={color} className={className}>
    <div>{text}</div>
  </Container>
)

export default SkillPill
