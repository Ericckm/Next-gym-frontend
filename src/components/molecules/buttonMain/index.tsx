import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  font-size: 12px;

  button {
    width: 76px;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    padding: 8px;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.background};
    transition: all 0.5s ease;

    :hover {
      color: ${(props) => props.theme.colors.white};
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`

export const ButtonMain = ({ children }) => {
  return (
    <ButtonContainer>
      <button>{children}</button>
    </ButtonContainer>
  )
}
