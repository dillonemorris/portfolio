import React from 'react'
import LibraryHeader from '../components/LibraryHeader'
import LibraryCard from '../components/LibraryCard'
import DevResources from '../components/DevResources'
import Resources from '../components/Resources'
import SEO from '../components/seo'
import styled from 'styled-components'
import libraryData from '../data/libraryData'

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

const HeadingContainer = styled.div`
  background-color: #fff;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const Heading = styled.h1`
  color: #11181e;
  font-weight: 600;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  font-size: 28px;
  padding-top: 60px;
  padding-bottom: 8px;
  margin-bottom: 0px;
`

const Subheading = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: #486581;
  letter-spacing: 0.5px;
  padding-bottom: 20px;
  line-height: 1.4;
`

const MyContainer = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
`

const LibraryCardGrid = styled.div`
  position: relative;
  display: grid;
  grid-gap: 80px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 275px));
  padding-bottom: 120px;

  @media (min-width: 475px) {
    max-width: 100%;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: minmax(360px, auto);
  }
`

const Library = () => (
  <>
    <SEO title="Library" />
    <Wrapper>
      <Container>
        <HeadingContainer>
          <LibraryHeader />
        </HeadingContainer>
        <Heading>
          <span role="img" aria-label="books" style={{ fontSize: '40px' }}>
            📚
          </span>{' '}
          Books
        </Heading>
        <Subheading>Good reads that I've thoroughly enjoyed</Subheading>
        <MyContainer>
          <LibraryCardGrid>
            {libraryData.map((book, i) => {
              return (
                <LibraryCard
                  key={i}
                  title={book.title}
                  author={book.author}
                  screenshot={book.screenshot}
                  quote={book.quote}
                  page={book.page}
                />
              )
            })}
          </LibraryCardGrid>
          <DevResources />
          <Resources />
        </MyContainer>
      </Container>
    </Wrapper>
  </>
)

export default Library
