import styled from 'styled-components'

export const Section = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  position: relative;
  top: 70px;

  > * {
    width: 100vw;
    height: calc(100vh - 70px);
  }
`
