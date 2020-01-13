import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Wrapper, Inner, Text, SocialLinks, Icon } from './style'
import { Link, Container, H1, LargeBody, Background } from '../globals'
import FooterWaves from '../../images/FooterWaves.svg'
import FooterWavesMobile from '../../images/FooterWavesMobile.svg'
import FooterWavesDark from '../../images/FooterWavesDark.svg'
import FooterWavesDarkMobile from '../../images/FooterWavesDarkMobile.svg'
import Contact from '../../icons/Contact'

const Footer = () => {
  const theme = useContext(ThemeContext)

  return (
    <Background color={theme.colors.background}>
      <Wrapper
        mobileBg={theme.dark ? FooterWavesDarkMobile : FooterWavesMobile}
        bg={theme.dark ? FooterWavesDark : FooterWaves}
      >
        <Container>
          <Inner>
            <Icon>
              <Contact color={theme.colors.body} />
            </Icon>
            <Text>
              <div>
                <H1 paddingBottom={theme.spacing._2}>Contact</H1>
                <LargeBody>Feel free to reach out and/or follow me!</LargeBody>
              </div>
              <SocialLinks>
                <Link page={'mailto:dillonmorris91@gmail.com'} text="Email" />
                <Link
                  page={'https://github.com/dillonmorris91'}
                  text="Github"
                />
                <Link
                  page={'https://dribbble.com/dillonmorris'}
                  text="Dribbble"
                />
                <Link
                  page={'https://www.linkedin.com/in/dillonmorrisdev/'}
                  text="LinkedIn"
                />
                <Link
                  page={'https://twitter.com/ThisIsDillon'}
                  text="Twitter"
                />
              </SocialLinks>
            </Text>
          </Inner>
        </Container>
      </Wrapper>
    </Background>
  )
}

export default Footer
