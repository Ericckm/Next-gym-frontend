import styled from 'styled-components'

export const TopbarMain = styled.div`
  width: 100%;
  height: 70px;
  background-color: none;
  position: absolute;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  padding: 2px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    .icon {
      font-size: 22px;
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
