import styled from 'styled-components'

export const StyledButton = styled.button`
  font-size: ${props =>
    props.fontSize ? props.fontSize : props.theme.fontSize.text_base};
  letter-spacing: ${props => props.theme.letterSpacing.wide};
  font-weight: ${props => props.theme.fontWeight.light};
  background: transparent;
  border: 1px solid
    ${props => (props.color ? props.color : props.theme.colors.primary)};
  padding: ${props => (props.padding ? props.padding : '20px 36px')};
  text-decoration: none;
  color: ${props =>
    props.textColor ? props.textColor : props.theme.colors.body};
  transition: all 170ms ease-in-out;
  width: 100%;

  @media (min-width: 600px) {
    width: auto;
  }

  :hover {
    cursor: pointer;
    color: ${props =>
      props.textHoverColor ? props.textHoverColor : props.theme.colors.white};
    background-color: ${props =>
      props.color ? props.color : props.theme.colors.primary};
  }
`
