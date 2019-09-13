import React from 'react'
import Button from '../Button'
import Pattern from '../../images/Pattern'
import {
  PatternBackground,
  Container,
  Closing,
  Heading,
  ClosingContainer,
  Description,
  Link,
} from './style'

const AboutClosing = () => (
  <PatternBackground bg={Pattern}>
    <Container>
      <Closing>
        <Heading>Contact</Heading>
        <ClosingContainer>
          <Description>
            Drop me a line if you want to chat, work together, or see more of my
            work.
          </Description>
          <Link href="mailto:dillonmorris91@gmail.com">
            <svg
              style={{ marginRight: '4px' }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#11181E"
            >
              <path
                className="heroicon-ui"
                d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"
              />
            </svg>
            dillonmorris91@gmail.com
          </Link>
        </ClosingContainer>
        <ClosingContainer>
          <Description>Side projects are everything!</Description>
          <Button
            className="projects"
            text={'projects'}
            page={'/projects/'}
            boxShadow={'5px 5px rgba(208, 91, 121, 0.4)'}
            boxShadowHover={'5px 5px rgba(208, 91, 121, 1)'}
            border={'3px solid rgba(208, 91, 121, 1)'}
            color={'rgba(208, 91, 121, 1)'}
          />
        </ClosingContainer>
        <ClosingContainer>
          <Description>
            This page should really be called "typing"{' '}
            <span role="img" aria-label="don't tell">
              🤫
            </span>
          </Description>
          <Button
            className="writing"
            text={'writing'}
            page={'/writing/'}
            boxShadow={'5px 5px rgba(130, 105, 200, 0.4)'}
            boxShadowHover={'5px 5px rgba(130, 105, 200, 1)'}
            border={'3px solid rgba(130, 105, 200, 1)'}
            color={'rgba(130, 105, 200, 1)'}
          />
        </ClosingContainer>
        <ClosingContainer>
          <Description>Learning is fun!</Description>
          <Button
            text={'library'}
            page={'/library/'}
            className="library"
            boxShadow={'5px 5px rgba(61, 118, 113, 0.4)'}
            boxShadowHover={'5px 5px rgba(61, 118, 113, 1)'}
            border={'3px solid rgba(61, 118, 113, 1)'}
            color={'rgba(61, 118, 113, 1)'}
          />
        </ClosingContainer>
      </Closing>
    </Container>
  </PatternBackground>
)

export default AboutClosing
