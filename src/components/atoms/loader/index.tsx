import { MutatingDots } from 'react-loader-spinner'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`
export const Loader = () => {
  return (
    <Container>
      <MutatingDots
        height="100"
        width="100"
        color="#011627"
        secondaryColor="#BDD4E7"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  )
}
