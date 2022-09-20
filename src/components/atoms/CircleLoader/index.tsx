import { Rings } from 'react-loader-spinner'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CircleLoader = () => {
  return (
    <Container>
      <Rings
        height="80"
        width="80"
        color="#011627"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </Container>
  )
}
