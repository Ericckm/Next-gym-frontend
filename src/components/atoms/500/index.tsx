import styled from 'styled-components'

export const Container = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: ${(props) => props.theme.colors.error};
  font-weight: 300;
  align-items: center;
  align-self: center;
  padding: 10px;
`

export const ApiError = () => {
  return (
    <Container>
      Sorry something went wrong connecting with the server, try again later.
    </Container>
  )
}
