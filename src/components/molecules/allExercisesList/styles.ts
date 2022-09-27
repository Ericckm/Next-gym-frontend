import styled from 'styled-components'

export const ExerciseDesc = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
`

export const Left = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  padding: 5px;
  height: 100%;
  width: 100%;

  :hover {
    border-color: ${(props) => props.theme.colors.white};
  }
`

export const Title = styled.div`
  flex: 2;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  transition: all 1s ease;

  :hover {
    border-color: ${(props) => props.theme.colors.white};
  }
`

export const Content = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  font-weight: 400;
  justify-content: center;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.primary};
  gap: 4px;

  a {
    width: 10px;
    margin-left: 10px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};
  }
`

export const Right = styled.div`
  flex: 1;
  display: flex;
  background-color: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.white};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-style: none;
    padding: 4px;
    transition: all 1s ease;
    background-color: ${(props) => props.theme.colors.third};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    border-left: 1px solid ${(props) => props.theme.colors.primary};
    font-weight: 900;

    :hover {
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.third};
    }
  }
`

export const ExerciseContainer = styled.li`
  display: flex;
  height: 84px;
  width: 200px;
  border: 1px solid;
  border-radius: 10px;
  margin: 5px 10px;
  overflow: hidden;
  transition: all 1s ease;

  @media only screen and (max-width: 540px) {
    width: 90%;
  }

  :hover {
    border-color: ${(props) => props.theme.colors.white};
  }
`
