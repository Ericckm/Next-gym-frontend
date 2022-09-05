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
  p {
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
  }

  label {
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
  }

  span {
    font-weight: 500;

    color: ${(props) => props.theme.colors.white};
  }
`

export const MainContent = styled.ul`
  flex: 4;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 80%;
`
