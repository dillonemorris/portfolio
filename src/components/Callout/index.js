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
import {
  Container,
  Left,
  Img,
  IconContainer,
  ImageAndIcons,
  Description,
} from './styles'

const Callout = () => {
  const theme = useContext(ThemeContext)
  return (
    <Container>
      <Left>
        <div>
          <H3 paddingBottom={theme.spacing._1}>What I'm up to</H3>
          <Description>
            <LargeBody>
              I am currently working with some awesome people at{' '}
              <Link
                lg
                page="https://synapsestudios.com"
                text="Synapse Studios"
              />
              . We build custom app used and loved by millions. There, I get to
              utilize my diverse skillset working on next level products.
            </LargeBody>
          </Description>
        </div>
        <Button
          textColor={theme.colors.primaryButtonText}
          text="more about me"
          page="/about"
        />
      </Left>
      <ImageAndIcons>
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
      </ImageAndIcons>
    </Container>
  )
}

export default Callout
