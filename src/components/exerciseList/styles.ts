import styled from 'styled-components'

export const ExerciseDesc = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  gap: 4px;
  padding: 10px;
  justify-content: center;
  border-right: 1px solid ${(props) => props.theme.colors.primary};
  transition: all 1s ease;

  :hover {
    border-color: ${(props) => props.theme.colors.white};
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;

    a {
      font-size: inherit;
      margin-left: 4px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.white};
    }
  }
`

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  button {
    height: 100%;
    border-style: none;
    font-weight: 600;
    padding: 4px;
    transition: all 0.5s ease;
    background-color: ${(props) => props.theme.colors.secundary};
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};

    :hover {
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.secundary};
    }
  }
`

export const ExerciseContainer = styled.li`
  display: flex;
  height: 96px;
  width: 200px;
  border: 1px solid;
  border-radius: 10px;
  margin: 5px 5px;
  overflow: hidden;
  transition: all 1s ease;

  :hover {
    border-color: ${(props) => props.theme.colors.white};
  }
`
