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
`

export const Container = styled.div`
  width: 40%;
  height: 60%;
  background-color: lightskyblue;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
    padding: 2px;
    font-size: 14px;
    cursor: pointer;
  }
`

export const Main = styled.div`
  flex: 6;
  background-color: red;
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
    height: 50px;
    padding: 2px;
    font-size: 14px;
    cursor: pointer;
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
  height: 100%;
  margin: 10px 5px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input {
      padding: 4px;
    }
  }
`
