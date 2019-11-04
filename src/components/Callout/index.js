import React from 'react'
import { Container, Heading, Description, Left, Img } from './styles'
import Button from '../Button'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ProfilePic from '../../images/ProfilePic.jpg'

const Callout = () => {
  const theme = useContext(ThemeContext)
  return (
    <Container>
      <Left>
        <Heading>What I'm up to</Heading>
        <Description>
          I am currently working with some amazing people at{' '}
          <strong>Synapse Studios</strong>. There, I get to utilize my diverse
          skillset working on next level products.
        </Description>
        <Button
          textColor={theme.colors.primaryButtonText}
          text="more about me"
        />
      </Left>
      <Img src={ProfilePic} />
    </Container>
  )
}

export default Callout
