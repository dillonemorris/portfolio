import styled from 'styled-components'

export const Wrapper = styled.footer`
  color: #11181e;
  background-image: ${({ bg }) => `url(${bg})`};
  background-position: top;
  background-size: cover;
`

export const Inner = styled.div`
  display: flex;
  padding-top: ${({ theme }) => theme.spacing._48};
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing._6};
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing._12};
  padding-bottom: ${({ theme }) => theme.spacing._8};
`
