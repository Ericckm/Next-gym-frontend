import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`

export const Title = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 10px;
  justify-content: center;
  align-items: center;
`

export const ExerciseContainer = styled.div`
  display: flex;
  height: 84px;
  width: 300px;
  border: 1px solid;
`

export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  margin-top: 40px;

  ul {
    height: 90%;
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    li {
      display: flex;
      margin: 0px 15px;
    }
  }
`

export const ExerciseDesc = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  gap: 2px;
  padding: 5px;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    font-size: 10px;
  }
`

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  button {
    height: 100%;
  }
`
