import styled from 'styled-components'

export const Section = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  position: relative;
  top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Guidebtn = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 18px;
  padding: 15px 34px;
  text-align: center;
  text-decoration: none;
  border: none;
  border-top: 2px solid;
  border-right: 2px solid;
  border-radius: 0 20px 0 0;
  cursor: pointer;
  transition: all 1s ease;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.third};
  border-color: ${(props) => props.theme.colors.white};
  z-index: 20;

  @media only screen and (max-width: 768px) {
    padding: 8px 16px;
  }

  :hover {
    border-color: ${(props) => props.theme.colors.secundary};
    color: ${(props) => props.theme.colors.secundary};
    background-color: ${(props) => props.theme.colors.white};
  }
`
