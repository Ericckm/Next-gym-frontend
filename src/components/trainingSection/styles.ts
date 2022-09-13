import styled from 'styled-components'

export const Title = styled.div`
  flex: 1;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 15px;
  gap: 4px;

  h3 {
    font-size: 24px;
    font-weight: 400;
    align-items: center;
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
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
    font-size: 14px;
    width: auto;
    border: none;
    background: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};

    &:focus {
      outline: none;
    }
  }
`

export const MainContent = styled.div`
  flex: 6;
  display: flex;
  width: 80%;
  justify-content: center;

  ul {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    height: 80%;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    padding: 10px;
    width: 100%;
    gap: 10px;
  }
`
