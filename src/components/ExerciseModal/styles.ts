import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(242, 243, 245, 0.7);

  transition: all 2s ease-out;
`

export const Container = styled.div`
  width: 40%;
  height: 60%;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
`

export const Top = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  flex: 8;
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
`

export const Button = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  button {
    width: 24px;
    font-size: 14px;
    border: none;
    font-weight: 200;
    border-radius: 10px;
    padding: 4px;
    color: ${(props) => props.theme.colors.secundary};
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export const Main = styled.div`
  flex: 6;
`

export const Bottom = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`

export const SubmitBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 76px;
    font-size: 14px;
    font-weight: 300;
    border: none;
    border-radius: 10px;
    padding: 8px;
    color: ${(props) => props.theme.colors.secundary};
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export const FormContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;

  h2 {
    display: flex;
    justify-content: center;
  }
`

export const Form = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  margin-left: 20px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
      display: flex;
      gap: 10px;
    }

    input {
      border: none;
      width: 30px;
      font-size: 14px;

      border-bottom: 1px solid ${(props) => props.theme.colors.primary};
      text-align: center;

      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      -moz-appearance: textfield;

      &:focus {
        outline: none;
      }
    }
  }
`
