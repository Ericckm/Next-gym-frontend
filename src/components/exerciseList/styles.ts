import styled from 'styled-components'

export const ExerciseDesc = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  gap: 3px;
  padding: 12px;
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
    font-weight: 600;
    font-size: 13px;

    a {
      font-size: inherit;
      margin-left: 4px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.white};
    }
  }

  span {
    font-size: 11px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.white};
  }

  /* This div only exists on exercises with no logs yet */
  div {
    margin: auto auto;
    align-items: center;
    justify-content: center;
    display: flex;

    span {
      font-size: 12px;
      font-weight: 300;
      color: ${(props) => props.theme.colors.error};
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
  height: 84px;
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
