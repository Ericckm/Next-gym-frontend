import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 20px;
  height: 60%;
  width: 60%;
  border-color: ${(props) => props.theme.colors.white};
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120px;
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  border-right: 1px solid ${(props) => props.theme.colors.white};
  border-color: ${(props) => props.theme.colors.white};
`

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
  color: ${(props) => props.theme.colors.white};
  gap: 10px;

  p {
    font-size: 48px;
  }
  span {
    font-size: 20px;
  }
`
