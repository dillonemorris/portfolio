import React from 'react'
import styled from 'styled-components'
import ReactCardFlipper from 'react-card-flipper'
import '../styles/react-card-flipper.css'
import Button from '../components/Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CardFront = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 16px 16px rgba(103, 110, 144, 0.05),
    0 8px 8px rgba(103, 110, 144, 0.05), 0 4px 4px rgba(103, 110, 144, 0.05),
    0 2px 2px rgba(103, 110, 144, 0.05);
  height: 384px;

  @media (min-width: 960px) {
    height: 340px;
  }
`

const Screenshot = styled.img`
  width: 100%;
  height: 384px;

  @media (min-width: 960px) {
    height: 340px;
  }
`

const CardBack = styled.div`
  align-content: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  height: 384px;
  box-shadow: 0 16px 16px rgba(103, 110, 144, 0.05),
    0 8px 8px rgba(103, 110, 144, 0.05), 0 4px 4px rgba(103, 110, 144, 0.05),
    0 2px 2px rgba(103, 110, 144, 0.05);

  @media (min-width: 960px) {
    height: 340px;
  }
`

const Quote = styled.div`
  padding: 20px;
  color: #486581;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  letter-spacing: 0.5px;
  line-height: 1.3;
  font-size: 24px;

  @media (min-width: 475px) {
    font-size: 18px;
  }
`

const CardBackBottom = styled.div`
  display: flex;
  padding: 10px 0px 20px 0px;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

const Title = styled.div`
  color: #11181e;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  letter-spacing: 0.5px;
  line-height: 1.3;
  font-size: 16px;
  padding-top: 4px;
  margin-bottom: 0px;
  text-align: center;
  padding: 0px 10px;
`

const Author = styled.div`
  padding-bottom: 4px;
  color: #486581;
  font-family: Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif !important;
  font-size: 13px;
  letter-spacing: 0.5px;
`

const LibraryCard = ({ title, author, screenshot, quote, page }) => (
  <Wrapper>
    <div>
      <ReactCardFlipper
        levitate
        height="340px"
        width="100%"
        behavior="click"
        className="cardOuter"
        innerCardClass="cardInner"
      >
        <CardFront>
          <div>
            <Screenshot src={screenshot} alt={'book cover'} />
          </div>
        </CardFront>
        <CardBack>
          <Quote>{quote}</Quote>
          <CardBackBottom>
            <Title>{title}</Title>
            <Author>{author}</Author>
            <Button
              color={'rgba(61, 118, 113, 1)'}
              border={'3px solid rgba(61, 118, 113, 1)'}
              boxShadowHover={'5px 5px rgba(61, 118, 113, 1)'}
              boxShadow={'5px 5px rgba(61, 118, 113, .4)'}
              text={'amazon'}
              fontSize={'13px'}
              padding={'2px 30px'}
              page={page}
            />
          </CardBackBottom>
        </CardBack>
      </ReactCardFlipper>
    </div>
  </Wrapper>
)

export default LibraryCard
