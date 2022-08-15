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
  flex: 2;
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
  flex: 1;
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

    input {
      padding: 4px;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.secundary};

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

  button {
    width: 180px;
    border: none;
    border-radius: 10px;
    padding: 4px;
    color: ${(props) => props.theme.colors.secundary};
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
  }
`
