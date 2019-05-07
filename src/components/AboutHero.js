import React, { Component } from 'react'
import styled from 'styled-components'
import about from '../images/about.jpg'

const Container = styled.div`
  padding: 50px 0px;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
    padding: 120px 0px 100px;
  }
`

const Img = styled.img`
  margin-bottom: 40px;

  @media (min-width: 700px) {
    max-width: 350px;
    max-height: 420px;
    margin-right: 40px;
    padding-bottom: 0px;
  }

  @media (min-width: 900px) {
    max-width: 450px;
    margin-right: 60px;
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
`

const Heading = styled.h1`
  color: #11181e;
  font-weight: 500;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  letter-spacing: 0.3px;
  font-size: 36px;

  @media (min-width: 700px) {
    font-size: 48px;
  }
`

const Paragraph = styled.p`
  color: #486581;
  font-size: 20px;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  line-height: 1.5;
`

const Tagline = styled.button`
    font-family: 
    Plex Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
    font-size: 18px;
    font-weight: 300;
    color: #4183D7;
    width: 200px;
    display: flex;
    align-items: center;
    padding: 0px;
    border: 0;
    background: none;

    :hover {
      cursor: pointer;
    },

    :focus {
      outline: none;
    },
  },
`

class AboutHero extends Component {
  handleClick() {
    document.querySelector('#target').scrollIntoView({
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <Container>
        <Img src={about} alt={'Dillon standing beneath tree in Autumn'} />
        <Right>
          <Heading>About</Heading>
          <Paragraph>
            I love learning. I strive to improve my craft every day. I see
            challenges as opportunities for growth and embrace them with open
            arms.
          </Paragraph>
          <Paragraph>
            In my current role, I am fortunate enough to be able to apply
            creative and analytical thinking to solve problems in both design
            and engineering.
          </Paragraph>
          <Paragraph>
            When I'm not coding & creating for the web I enjoy playing and
            writing music, spending time with my lovely girlfriend and our
            Golden Doodle named Bowie
            <span role="img" aria-label="lightning bolt">
              ⚡️
            </span>
            .
          </Paragraph>
          <Tagline onClick={this.handleClick}>
            Check my skills{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="#4183D7"
              style={{ marginLeft: '9px' }}
            >
              <path d="M11 18.59V3a1 1 0 0 1 2 0v15.59l5.3-5.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 1.4-1.42l5.3 5.3z" />
            </svg>
          </Tagline>
        </Right>
      </Container>
    )
  }
}

export default AboutHero
