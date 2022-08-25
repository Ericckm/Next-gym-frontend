import styled from 'styled-components'

export const ExerciseDesc = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  gap: 3px;
  padding: 5px;
  justify-content: center;
  border-right: 1px solid ${(props) => props.theme.colors.primary};

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 12px;

    a {
      font-size: inherit;
      margin-left: 4px;
      text-decoration: none;
      font-weight: 400;
    }
  }

  span {
    font-size: 10px;
    font-weight: 400;
  }
`

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  button {
    height: 50%;
    border-style: none;
  }
`

export const ExerciseContainer = styled.li`
  display: flex;
  height: 84px;
  width: 200px;
  border: 1px solid;
  border-radius: 10px;
  margin: 5px 5px;
  overflow: hidden;
`

export const ExerciseNoLogs = styled.div``
