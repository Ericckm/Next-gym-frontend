import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainContent = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  padding: 10px;
  flex-direction: column;
`

export const Top = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 8px;
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
      background-color: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.white};
      font-weight: 600;
      font-size: 14px;
      width: 120px;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.primary};

      &:focus {
        outline: none;
      }
    }

    input {
      padding: 4px;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
      font-weight: 600;
      font-size: 14px;
      background-color: ${(props) => props.theme.colors.background};
      width: 120px;

      &::placeholder {
        color: ${(props) => props.theme.colors.white};
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

export const Mid = styled.div`
  display: flex;
  flex: 4;
  padding: 10px;

  ul {
    flex: 4;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 80%;
  }
`

export const Bottom = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 10px;

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
