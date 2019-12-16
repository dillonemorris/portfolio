import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 1rem;

  @media (min-width: ${({ theme }) => theme.mq.md}) {
    padding: ${({ theme }) => theme.spacing._8};
  }
`

export const Tag = styled.div`
  border-radius: 32px;
  background: ${({ tagBackground }) => tagBackground};
  color: ${({ tagColor }) => tagColor};
  padding: 4px 16px;
  margin-right: ${({ theme }) => theme.spacing._2};
  font-size: ${({ theme }) => theme.fontSize.text_sm.desktop};
`

export const TagContainer = styled.div`
  display: flex;
  padding-top: ${({ theme }) => theme.spacing._2};
`

export const BuiltWith = styled.div`
  padding-top: ${({ theme }) => theme.spacing._6};
  font-size: ${({ theme }) => theme.fontSize.text_base.desktop};
`
