import Link from 'next/link'
import {
  ButtonContainer,
  Container,
  FormContainer,
  Left,
  Right,
  Title
} from './styles'

const Login = () => {
  return (
    <Container>
      <Left>
        <img src="assets/Gym.jpg" alt="" />
      </Left>
      <Right>
        <Title>
          <h2>Welcome</h2>
        </Title>
        <FormContainer>
          <form action="">
            <span>Enter your credentials to proceed</span>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
          </form>
        </FormContainer>
        <ButtonContainer>
          <button>Login</button>
          <Link href={'/'}>don't have an account?</Link>
        </ButtonContainer>
      </Right>
    </Container>
  )
}

export default Login
