import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`

export const Title = styled.div`
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const MainContent = styled.div`
  flex: 4;
  justify-content: center;
  display: flex;

  ul {
    padding: 15px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      flex-wrap: wrap;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`
