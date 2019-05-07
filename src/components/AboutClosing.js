import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import pattern from '../images/pattern.svg'

const PatternBackground = styled.div`
  background-image: url('${pattern}'),
  background-color: #fff;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0px auto;
  max-width: 1080px;
  padding: 0px 1.0875rem 0rem;
`

const Closing = styled.div`
  display: flex;
  flex-direction: column;
  color: #486581;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  line-height: 1.5;
  padding: 80px 0px 0px;
`

const Heading = styled.h1`
  color: #11181e;
  font-weight: 500;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  font-size: 32px;
  letter-spacing: 0.3px;

  @media (min-width: 700px) {
    font-size: 40px;
  }
`

const ClosingContainer = styled.div`
  padding-bottom: 48px;
`

const Description = styled.p`
  font-size: 20px;
  padding-bottom: 10px;
  margin-bottom: 0px;
`

const Link = styled.a`
  display: flex;
  align-items: center;
  max-width: 250px;
  color: #11181E;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid #bcd9ff;
  transition: background 0.4s ease-out;

  :hover {
    background: #bcd9ff;
  },
`

const StyledButton = styled(Button)`
  font-family: Plex mono;
  font-size: 14px;
  letter-spacing: 0.8px;
  font-weight: 600;
  background: #fff;
  border: 3px solid #11181e;
  padding: 6px 20px;
  text-decoration: none;
  color: #11181e;
  transition: all 170ms ease-in-out;
  width: 100%;

  @media (min-width: 600px) {
    width: auto;
  }

  :hover {
    cursor: pointer;
  }

  &.projects {
    box-shadow: 5px 5px rgba(208, 91, 121, 0.4);

    :hover {
      box-shadow: 5px 5px rgba(208, 91, 121, 1);
      border: 3px solid rgba(208, 91, 121, 1);
      color: rgba(208, 91, 121, 1);
    }
  }

  &.writing {
    box-shadow: 5px 5px rgba(130, 105, 200, 0.4);

    :hover {
      box-shadow: 5px 5px rgba(130, 105, 200, 1);
      border: 3px solid rgba(130, 105, 200, 1);
      color: rgba(130, 105, 200, 1);
    }
  }

  &.library {
    box-shadow: 5px 5px rgba(61, 118, 113, 0.4);

    :hover {
      box-shadow: 5px 5px rgba(61, 118, 113, 1);
      border: 3px solid rgba(61, 118, 113, 1);
      color: rgba(61, 118, 113, 1);
    }
  }
`

const AboutClosing = () => (
  <PatternBackground>
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
          <StyledButton
            className="projects"
            text={'projects'}
            page={'/projects/'}
          />
        </ClosingContainer>
        <ClosingContainer>
          <Description>
            This page should really be called "typing"{' '}
            <span role="img" aria-label="don't tell">
              🤫
            </span>
          </Description>
          <StyledButton
            className="writing"
            text={'writing'}
            page={'/writing/'}
          />
        </ClosingContainer>
        <ClosingContainer>
          <Description>Learning is fun!</Description>
          <StyledButton
            text={'library'}
            page={'/library/'}
            className="library"
          />
        </ClosingContainer>
      </Closing>
    </Container>
  </PatternBackground>
)

export default AboutClosing
