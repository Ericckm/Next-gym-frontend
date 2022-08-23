import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  flex: 1;
  width: 70%;
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

  overflow: hidden;

  ul {
    padding: 15px;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    li {
      flex-wrap: wrap;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`
