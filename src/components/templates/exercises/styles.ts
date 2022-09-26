import styled from 'styled-components'

export const Top = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 80%;

  @media only screen and (max-width: 768px) {
    flex: 0.3;
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
    color: ${(props) => props.theme.colors.third};
    font-weight: 400;

    @media only screen and (max-width: 768px) {
      gap: 1px;
      font-size: 13px;
    }

    select {
      padding: 4px;
      color: ${(props) => props.theme.colors.primary};
      font-weight: 600;
      font-size: 14px;
      width: 120px;
      border: none;
      background: none;
      color: ${(props) => props.theme.colors.third};
      font-weight: 400;
      border-bottom: 1px solid ${(props) => props.theme.colors.primary};

      @media only screen and (max-width: 768px) {
        margin-bottom: 10px;
        font-size: 12px;
        width: 100px;
      }

      &:focus {
        outline: none;
      }
    }

    input {
      padding: 4px;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.third};
      font-weight: 600;
      font-size: 14px;
      background: none;
      width: 120px;

      @media only screen and (max-width: 768px) {
        margin-bottom: 10px;
        width: 100px;
        font-size: 12px;
      }

      &::placeholder {
        color: ${(props) => props.theme.colors.third};
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
  align-items: flex-start;
  flex: 3;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`

export const Flipbtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 18px;
  padding: 15px 34px;
  text-align: center;
  text-decoration: none;
  border: none;
  border-top: 2px solid;
  border-left: 2px solid;
  border-radius: 20px 0 0 0;
  cursor: pointer;
  transition: all 1s ease;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.third};
  border-color: ${(props) => props.theme.colors.white};

  :hover {
    border-color: ${(props) => props.theme.colors.secundary};
    color: ${(props) => props.theme.colors.secundary};
    background-color: ${(props) => props.theme.colors.white};
  }
`

export const Bottom = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  width: 80%;

  button {
    size: 12px;
    background-color: ${(props) => props.theme.colors.third};
    border: 1.4px solid ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.white};
    border-radius: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
    transition: all 1s ease;
    cursor: pointer;

    :hover {
      border-color: ${(props) => props.theme.colors.secundary};
      color: ${(props) => props.theme.colors.secundary};
      background-color: ${(props) => props.theme.colors.white};
    }
  }

  ul {
    display: flex;
    border: 2px;
    gap: 4px;
    font-size: 14px;
    font-weight: 400;

    .active {
      background-color: ${(props) => props.theme.colors.third};
      border: 1px solid ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.white};
      transition: all 1s ease;

      :hover {
        color: ${(props) => props.theme.colors.secundary};
        border-color: ${(props) => props.theme.colors.secundary};
        background-color: ${(props) => props.theme.colors.white};
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
`
