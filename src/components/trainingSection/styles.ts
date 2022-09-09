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
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};
  }

  label {
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};
  }

  span {
    font-weight: 500;

    color: ${(props) => props.theme.colors.white};
  }

  select {
    padding: 4px;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.white};
    font-weight: 600;
    font-size: 14px;
    width: 44px;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};

    &:focus {
      outline: none;
    }
  }
`

export const MainContent = styled.div`
  flex: 3;
  padding: 10px;
  display: flex;
  width: 80%;
  justify-content: center;

  ul {
    align-items: center;
    flex: 4;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
  }
`
