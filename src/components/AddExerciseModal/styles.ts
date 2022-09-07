import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  background-color: rgba(242, 243, 245, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  padding: 10px;
  width: 40%;
  height: 60%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  opacity: 0.8;
`

export const Top = styled.div`
  flex: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  flex: 8;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.primary};
`

export const Button = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  button {
    width: 24px;
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
      color: ${(props) => props.theme.colors.white};
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.background};
    }
  }
`

export const Main = styled.div`
  flex: 6;
  width: 100%;
`

export const Form = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;

  form {
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-left: 40px;

    div {
      display: flex;
      width: 80%;
      justify-content: flex-start;
      gap: 5px;

      label {
        color: ${(props) => props.theme.colors.primary};
        font-size: 16px;
        font-weight: 400;
      }

      input {
        border: none;
        width: 120px;
        font-size: 14px;
        font-weight: 600;
        color: ${(props) => props.theme.colors.primary};
        border-bottom: 1px solid ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.white};
        padding-left: 8px;

        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        -moz-appearance: textfield;

        &::placeholder {
          font-weight: 400;
          color: ${(props) => props.theme.colors.background};
        }

        &:focus {
          outline: none;
          border-bottom: none;
        }
      }

      select {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.primary};
        font-weight: 600;
        font-size: 14px;
        width: 120px;
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.primary};

        &:focus {
          outline: none;
        }
      }
    }
  }
`

export const Bottom = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  font-size: 12px;

  button {
    width: 76px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    padding: 8px;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    transition: all 0.5s ease;

    :hover {
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.background};
    }
  }
`
