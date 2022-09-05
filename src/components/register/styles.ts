import styled from 'styled-components'

export const Container = styled.div`
  height: 70%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`

export const Left = styled.div`
  flex: 8;
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: stretch;
    opacity: 0.7;
  }
`

export const Right = styled.div`
  flex: 6;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
`

export const FormContainer = styled.div`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    p {
      font-size: 16px;
      font-weight: 400;
      color: ${(props) => props.theme.colors.primary};
    }

    input {
      padding: 4px;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.primary};
      font-weight: 500;
      font-size: 14px;

      &::placeholder {
        color: ${(props) => props.theme.colors.background};
      }

      &:focus {
        outline: none;
      }
    }
  }
  span {
    font-size: 12px;
    color: ${(props) => props.theme.colors.error};
  }
`

export const ButtonContainer = styled.div`
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
    color: ${(props) => props.theme.colors.white};
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
