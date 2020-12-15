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
              Collaborating with clients and co-workers to build solid products at{' '}
              <Link
                lg
                page="https://formidable.com/"
                text="Formidable"
              />
              . I'm grateful to work for a company that shares my values. Values like inclusion, autonomy and craft.
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
          <a target="blank" href="https://github.com/dilmodev">
            <Github color={theme.colors.socialIcon} />
          </a>
          <a target="blank" href="https://twitter.com/dilmodev">
            <Twitter color={theme.colors.socialIcon} />
          </a>
          <a target="blank" href="https://dribbble.com/dilmodev">
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
