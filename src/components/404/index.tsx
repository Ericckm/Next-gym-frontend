import { Container, Content, Left, Right } from './styles'

export const NotFound = () => {
  return (
    <Container>
      <Content>
        <Left>
          <p>404</p>
        </Left>
        <Right>
          <p>SORRY!</p>
          <span>The page you're looking for was not found</span>
        </Right>
      </Content>
    </Container>
  )
}
