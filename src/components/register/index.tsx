import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../services/loginRequestCall'
import {
  ButtonContainer,
  Container,
  FormContainer,
  Left,
  Right,
  Title
} from './styles'

export const Register = () => {
  const [inputs, setInputs] = useState({})
  const router = useRouter()
  const dispatch = useDispatch()
  const { isFetching, error, loggedIn } = useSelector(
    (state: any) => state.user
  )

  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    register(dispatch, inputs)
  }

  useEffect(() => {
    loggedIn && router.push('/training')
  }, [loggedIn])

  return (
    <Container>
      <Left>
        <img src="assets/Gym.jpg" alt="" />
      </Left>
      <Right>
        <Title>
          <h2>Welcome to our app</h2>
        </Title>
        <FormContainer>
          <form action="">
            <p>Create an account</p>
            <input
              type="name"
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
          </form>
        </FormContainer>
        <ButtonContainer>
          <button onClick={handleSubmit}>Register</button>
          <Link href={'/'}>already have an account?</Link>
        </ButtonContainer>
      </Right>
    </Container>
  )
}
