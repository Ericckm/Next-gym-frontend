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
  padding: 10px;
  height: 100%;
  width: 100%;
  display: grid;
  overflow-y: auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  @media only screen and (max-width: 840px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
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

  @media only screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

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

  @media only screen and (max-width: 768px) {
    flex: 0.3;
    margin: 10px 0;
  }

  button {
    background-color: ${(props) => props.theme.colors.third};
    border: 1.4px solid ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.white};
    border-radius: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
    transition: all 1s ease;
    cursor: pointer;

    svg {
      @media only screen and (max-width: 768px) {
        font-size: 20px;
      }
    }

    @media only screen and (max-width: 768px) {
      font-size: 10px;
    }

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
      font-size: 14px;

      @media only screen and (max-width: 768px) {
        padding: 6px;
        border-radius: 4px;
        font-size: 12px;
      }

      :hover {
        color: ${(props) => props.theme.colors.white};
        border: 1px solid ${(props) => props.theme.colors.white};
      }
    }
  }
`
