import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 16px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.calloutBackground};
  position: relative;
  top: -140px;

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    flex-direction: row;
    padding: 30px 30px 30px;
    top: -240px;
  }

  @media (min-width: ${({ theme }) => theme.mq.lg}) {
    padding: 40px 60px 30px;
  }
`

export const Description = styled.div`
  padding-right: 0;
  padding-bottom: ${({ theme }) => theme.spacing._4};

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    padding-right: ${({ theme }) => theme.spacing._8};
  }

  @media (min-width: ${({ theme }) => theme.mq.lg}) {
    padding-right: 0;
  }
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    justify-content: space-between;
  }

  @media (min-width: ${({ theme }) => theme.mq.lg}) {
    flex-direction: column;
    justify-content: space-around;
  }
`

export const ImageAndIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.mq.lg}) {
    flex-direction: row;
    justify-content: flex-start;
  }
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Img = styled.img`
  width: 100%;
  padding-bottom: 20px;
  padding-top: ${({ theme }) => theme.spacing._6};

  @media (min-width: ${({ theme }) => theme.mq.lg}) {
    width: 140vh;
    padding: 0 30px 0px 4rem;
  }
`
