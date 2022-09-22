import styled from 'styled-components'

export const Title = styled.div`
  flex: 1;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  h3 {
    font-size: 24px;
    font-weight: 400;
    align-items: center;
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 400;
  }

  label {
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};
  }

  span {
    font-weight: 500;
    color: ${(props) => props.theme.colors.white};
  }

  select {
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
    font-size: 14px;
    width: auto;
    border: none;
    background: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};

    &:focus {
      outline: none;
    }
  }
`

export const ExerciseUl = styled.ul`
  align-items: flex-start;
  flex: 3;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`

export const Bottom = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    flex-direction: column;
    border: none;
    background: none;
    align-items: center;
    cursor: pointer;

    p {
      font-weight: 500;
      font-size: 18px;
      color: ${(props) => props.theme.colors.third};
    }

    .start {
      font-size: 64px;
    }
  }
`
