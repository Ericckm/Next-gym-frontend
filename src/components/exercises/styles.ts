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
`

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    gap: 8px;
  }
`

export const Mid = styled.div`
  display: flex;
  flex: 4;
`

export const Bottom = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 10px;

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
