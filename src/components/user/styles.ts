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
    width: 100%;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      gap: 8px;
    }
  }
`

export const Bottom = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
