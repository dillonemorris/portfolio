import React from 'react'
import {
  Container,
  Heading,
  Description,
  Left,
  Img,
  IconContainer,
} from './styles'
import Button from '../Button'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Github from '../../icons/Github'
import Twitter from '../../icons/Twitter'
import Dribbble from '../../icons/Dribbble'
import LinkedIn from '../../icons/LinkedIn'
import ProfilePic from '../../images/ProfilePic.jpg'

const Callout = () => {
  const theme = useContext(ThemeContext)
  return (
    <Container>
      <Left>
        <Heading>What I'm up to</Heading>
        <Description>
          I am currently working with some amazing people at{' '}
          <a
            href="https://synapsestudios.com"
            target="blank"
            style={{
              color: theme.colors.primaryLink,
              fontWeight: theme.fontWeight.medium,
              textDecoration: 'none',
            }}
          >
            Synapse Studios
          </a>
          . There, I get to utilize my diverse skillset working on next level
          products.
        </Description>
        <Button
          textColor={theme.colors.primaryButtonText}
          text="more about me"
        />
      </Left>
      <Img src={ProfilePic} />
      <IconContainer>
        <a target="blank" href="https://github.com/dillonmorris91">
          <Github color={theme.colors.socialIcon} />
        </a>
        <a target="blank" href="https://twitter.com/ThisIsDillon">
          <Twitter color={theme.colors.socialIcon} />
        </a>
        <a target="blank" href="https://dribbble.com/dillonmorris">
          <Dribbble color={theme.colors.socialIcon} />
        </a>
        <a target="blank" href="https://www.linkedin.com/in/dillonmorrisdev/">
          <LinkedIn color={theme.colors.socialIcon} />
        </a>
      </IconContainer>
    </Container>
  )
}

export default Callout
