import styled from 'styled-components'

export const Wrapper = styled.footer`
  background-image: ${({ mobileBg }) => `url(${mobileBg})`};
  background-position: top;
  background-size: cover;

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    background-image: ${({ bg }) => `url(${bg})`};
  }
`

export const Inner = styled.div`
  display: flex;
  padding-top: ${({ theme }) => theme.spacing._32};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    padding-top: ${({ theme }) => theme.spacing._48};
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing._0};

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    margin-left: ${({ theme }) => theme.spacing._6};
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing._12};
  padding-bottom: ${({ theme }) => theme.spacing._8};
`

export const Icon = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.mq.sm}) {
    display: flex;
  }
`
