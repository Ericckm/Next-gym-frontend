import styled from 'styled-components'

export const TopbarMain = styled.div`
  width: 100%;
  height: 70px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;

  .active {
    border-color: ${(props) => props.theme.colors.white};
  }

  .active {
    color: ${(props) => props.theme.colors.white};
  }

  .active a {
    color: ${(props) => props.theme.colors.white};
  }

  .active .icon {
    color: ${(props) => props.theme.colors.white};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
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
      font-size: 16px;
      text-decoration: none;
      font-weight: 500;
      color: ${(props) => props.theme.colors.primary};
      transition: all 0.5s ease;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
    }
  }
`

export const MenuContainer = styled.div`
  width: 104px;
  height: 60px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  display: flex;
  transition: all 2s ease;
  :hover {
    border-color: ${(props) => props.theme.colors.white};
  }
`
