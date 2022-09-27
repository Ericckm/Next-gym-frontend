import styled from 'styled-components'

export const Container = styled.div`
  min-height: 60%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: white;
  flex-direction: column;
  border-radius: 20px;
  opacity: 0.95;

  @media only screen and (max-width: 768px) {
    width: 70%;
    min-height: 80%;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  h2 {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const FormContainer = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    font-size: 12px;
    color: ${(props) => props.theme.colors.error};
    margin-bottom: 20px;
  }

  form {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;

    p {
      font-size: 16px;
      font-weight: 400;
      color: ${(props) => props.theme.colors.primary};
    }

    input {
      padding: 4px;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.secundary};
      color: ${(props) => props.theme.colors.third};
      font-weight: 500;
      font-size: 14px;
      background: none;

      &::placeholder {
        color: ${(props) => props.theme.colors.secundary};
      }

      &:focus {
        outline: none;
      }
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  font-size: 12px;
  flex: 1;

  button {
    width: 76px;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    padding: 8px;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    transition: all 0.5s ease;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.colors.secundary};
    }

    :disabled {
      background-color: ${(props) => props.theme.colors.error};
    }
  }

  a {
    text-decoration: none;
    height: 10px;
    color: ${(props) => props.theme.colors.primary};
  }
  a:visited {
    font-weight: 600;
    color: ${(props) => props.theme.colors.secundary};
  }
  a:hover {
    font-size: 14px;
  }
`
