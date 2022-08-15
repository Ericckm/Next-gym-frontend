import styled from 'styled-components'

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

export const ExerciseContainer = styled.div`
  display: flex;
  height: 84px;
  width: 300px;
  border: 1px solid;
`
