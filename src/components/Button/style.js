import styled from 'styled-components'

export const StyledButton = styled.button`
  font-family: Plex mono;
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  letter-spacing: 0.8px;
  font-weight: 600;
  background: #fff;
  border: 3px solid #11181e;
  box-shadow: ${props => props.boxShadow};
  padding: ${props => (props.padding ? props.padding : '10px 30px')};
  text-decoration: none;
  color: #11181e;
  transition: all 170ms ease-in-out;
  width: 100%;

  @media (min-width: 600px) {
    width: auto;
  }

  :hover {
    box-shadow: ${props => props.boxShadowHover};
    cursor: pointer;
    border: 3px solid ${props => props.color};
    color: ${props => props.color};
  }
`
