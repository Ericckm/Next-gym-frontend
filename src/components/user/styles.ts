import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 100%;
`

export const Top = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  width: 100%;

  div {
    p {
      font-size: 24px;
      font-weight: 400;
      align-items: center;
    }
  }
`
export const Middle = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  div {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30%;
    img {
      border: 1px solid;
      border-radius: 10px;
      height: 80px;
    }
  }

  form {
    height: 70%;
    display: flex;
    flex-direction: column;
    padding: 10px;

    .bmi {
      color: ${(props) => props.theme.colors.primary};
      font-size: 18px;
      span {
        color: ${(props) => props.theme.colors.white};
        font-weight: 500;
      }
    }

    label {
      font-size: 16px;
      font-weight: 400;
      color: ${(props) => props.theme.colors.primary};
    }

    div {
      display: flex;
      justify-content: space-between;
      gap: 12px;

      input {
        padding: 4px;
        border: none;
        color: ${(props) => props.theme.colors.primary};
        font-weight: 600;
        background-color: ${(props) => props.theme.colors.white};
        opacity: 0.9;

        &::placeholder {
          color: ${(props) => props.theme.colors.background};
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
`

export const FormBottom = styled.div`
  flex-direction: column;
`

export const Bottom = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 76px;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    padding: 8px;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.white};
    transition: all 0.5s ease;

    :hover {
      color: ${(props) => props.theme.colors.white};
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`
