import React, { useContext } from 'react'
import { Link } from '../../components/globals'
import Button from '../Button'
import { ThemeContext } from 'styled-components'
import Github from '../../icons/Github'
import Twitter from '../../icons/Twitter'
import Dribbble from '../../icons/Dribbble'
import LinkedIn from '../../icons/LinkedIn'
import ProfilePic from '../../images/ProfilePic.jpg'
import { H3, LargeBody } from '../globals'
import { Container, Left, Img, IconContainer } from './styles'

const Callout = () => {
  const theme = useContext(ThemeContext)
  return (
    <Container>
      <Left>
        <div>
          <H3>What I'm up to</H3>
          <LargeBody>
            I am currently working with some amazing people at{' '}
            <Link lg page="https://synapsestudios.com" text="Synapse Studios" />
            . There, I get to utilize my diverse skillset working on next level
            products.
          </LargeBody>
        </div>
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
