import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`

export const Title = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 10px;
  justify-content: center;
  align-items: center;
`

export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  margin-top: 40px;

  ul {
    height: 90%;
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    li {
      display: flex;
      margin: 0 15px;
    }
  }
`
