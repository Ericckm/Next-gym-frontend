import styled from 'styled-components'

export const Container = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: ${(props) => props.theme.colors.error};
  font-weight: 300;
`

export const ApiError = () => {
  return (
    <Container>
      Sorry something went wrong with the server, try again later.
    </Container>
  )
}
