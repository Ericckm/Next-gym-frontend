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

    .icon {
      font-size: 22px;
      display: flex;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`

export const MenuContainer = styled.div`
  width: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid;
  border-radius: 10px;
`
