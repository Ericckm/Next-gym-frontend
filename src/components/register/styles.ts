import styled from 'styled-components'

export const Container = styled.div`
  height: 70%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: rgba(255, 255, 255, 0.8);
`

export const Title = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const FormContainer = styled.div`
  height: 200px;
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
    background-color: ${(props) => props.theme.colors.primary};
    transition: all 0.5s ease;

    :hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.secundary};
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
