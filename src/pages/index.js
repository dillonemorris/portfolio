import React from 'react'
import styled from 'styled-components'
import '../styles/fonts.css'
import Avatar from '../images/avatar.png'
import Button from '../components/Button'
import SEO from '../components/seo'

const Container = styled.div`
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
  max-width: 1080px;

  @media (min-width: 600px) {
    margin: 0px auto;
  }
`

const Wrapper = styled.div`
  background-color: #f4f4f4;
`

const Heading = styled.h1`
    color: #11181E;
    font-weight: 700;
    font-family:
      Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !importantI
    letter-spacing: .8px;
    font-size: 22px;
    line-height: 1;
    text-align: center;

    @media (min-width: 400px) {
      font-size: 28px;
    }

    @media (min-width: 600px) {
      font-size: 36px; 
    }
`

const Subheading = styled.p`
  color: #11181e;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  font-weight: 400;
  max-width: 800px;
  text-align: center;
  line-height: 24px;
  margin-bottom: 10px;
  letter-spacing: 0.4px;
  font-size: 16px;

  @media (min-width: 600px) {
    font-size: 18px;
  }
`

const MyContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  min-height: calc(100vh - 210px);
`

const BodyText = styled.p`
  color: #11181e;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  max-width: 800px;
  text-align: center;
  line-height: 24px;
  margin-bottom: 60px;
  letter-spacing: 0.4px;
  font-size: 16px;

  @media (min-width: 600px) {
    font-size: 18px;
  }
`

const Img = styled.img`
  width: 140px;
  padding: 18px 0px;

  @media (min-width: 600px) {
    padding: 22px 0px;
  }
`

const Link = styled.a`
  color: #11181e;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid #bcd9ff;
  transition: background 0.4s ease-out;

  :hover {
    background: #bcd9ff;
  }

  @media (min-width: 600px) {
    fontsize: '18px';
  }
`

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Wrapper>
      <Container>
        <MyContainer>
          <Img src={Avatar} alt={'avatar'} />
          <Heading>Hey, I’m Dillon.</Heading>
          <Subheading>UI Designer & Developer from Phoenix, AZ.</Subheading>
          <BodyText>
            Currently working with some amazing people at{' '}
            <Link
              target="_blank"
              href={'https://www.elmstreettechnology.com'}
              rel="noopener noreferrer"
            >
              Elm Street Technology.
            </Link>
          </BodyText>
          <Button
            color={'rgba(65, 131, 215, 1)'}
            boxShadow={'5px 5px rgba(65, 131, 215, .4)'}
            boxShadowHover={'5px 5px rgba(65, 131, 215, 1)'}
            border={'3px solid rgba(65, 131, 215, 1)'}
            text="more about me"
            page={'/about/'}
          />
        </MyContainer>
      </Container>
    </Wrapper>
  </>
)

export default IndexPage
