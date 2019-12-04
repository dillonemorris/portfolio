import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 60px 28px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.calloutBackground};
  position: relative;
  top: -240px;
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0px 24px 48px;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${({ theme }) => theme.fontSize.text_3xl};
  margin-bottom: ${({ theme }) => theme.spacing._2};
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.accentBody};
  font-size: ${({ theme }) => theme.fontSize.text_xl};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  padding-right: ${({ theme }) => theme.spacing._16};
`

export const Img = styled.img`
  width: 300px;
`
