import React, { Component } from 'react'
import about from '../../images/about.jpg'

import { Container, Img, Right, Heading, Paragraph, Tagline } from './style'

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
            Right now I am interested in Functional Javascript, learning about
            new features in React such as Hooks, and using new exciting tools
            like Gatsby and Netlify.
          </Paragraph>
          <Paragraph>
            When I'm not coding & creating for the web I enjoy playing and
            writing music and staying physically active.
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
