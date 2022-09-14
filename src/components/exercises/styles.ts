import styled from 'styled-components'

export const Top = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 80%;

  h3 {
    font-weight: 500;
    color: ${(props) => props.theme.colors.white};
  }
`

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    gap: 8px;

    select {
      padding: 4px;
      color: ${(props) => props.theme.colors.primary};
      font-weight: 600;
      font-size: 14px;
      width: 120px;
      border: none;
      background: none;

      border-bottom: 1px solid ${(props) => props.theme.colors.primary};

      &:focus {
        outline: none;
      }
    }

    input {
      padding: 4px;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.primary};
      font-weight: 600;
      font-size: 14px;
      background: none;
      width: 120px;

      &::placeholder {
        color: ${(props) => props.theme.colors.primary};
        font-weight: 300;
      }

      &:focus {
        outline: none;
      }
    }
  }
  span {
    font-size: 12px;
    color: ${(props) => props.theme.colors.error};
  }
`

export const ExerciseUl = styled.ul`
  align-items: center;
  flex: 4;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const Flipbtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 16px;
  padding: 15px 28px;
  text-align: center;
  text-decoration: none;
  border: none;
  border-top: 1px solid;
  border-left: 1px solid;
  border-radius: 20px 0 15px 20px;
  cursor: pointer;
  transition: all 1s ease;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  background: none;
  color: ${(props) => props.theme.colors.white};
  border-color: ${(props) => props.theme.colors.primary};

  :hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.white};
  }
`

export const Bottom = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  width: 70%;

  ul {
    display: flex;
    border: 1px;
    gap: 4px;
    font-size: 14px;
    font-weight: 400;

    .active {
      background-color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.primary};

      :hover {
        color: ${(props) => props.theme.colors.primary};
        border: 1px solid ${(props) => props.theme.colors.white};
      }
    }

    li {
      padding: 10px;
      border: 1px solid ${(props) => props.theme.colors.primary};
      border-radius: 10px;
      transition: all 0.5s ease;
      cursor: pointer;

      :hover {
        color: ${(props) => props.theme.colors.white};
        border: 1px solid ${(props) => props.theme.colors.white};
      }
    }
  }

  button {
    display: flex;
    border-color: ${(props) => props.theme.colors.primary};
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.background};
    cursor: pointer;

    .add {
      font-size: 26px;
      color: ${(props) => props.theme.colors.primary};
      overflow: hidden;
    }
  }
`
