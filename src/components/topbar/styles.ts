import styled from 'styled-components'

export const TopbarMain = styled.div`
  width: 100%;
  height: 70px;
  background-color: none;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-around;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5px 0;
    gap: 4px;
    transition: all 1.5s ease;

    :hover {
      color: ${(props) => props.theme.colors.white};
      .icon {
        color: ${(props) => props.theme.colors.white};
      }
      a {
        color: ${(props) => props.theme.colors.white};
      }
    }

    .icon {
      font-size: 22px;
      display: flex;
      color: ${(props) => props.theme.colors.primary};
      transition: all 1s ease;
    }

    a {
      text-decoration: none;
      font-weight: 600;
      color: ${(props) => props.theme.colors.primary};
      transition: all 0.5s ease;
    }
  }
`

export const MenuContainer = styled.div`
  width: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1.8px solid;
  border-radius: 10px;
`
