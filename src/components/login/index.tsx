import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  ButtonContainer,
  Container,
  FormContainer,
  Left,
  Right,
  Title
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { validateEmail } from '../../utils/validateEmail'
import { login } from '../../services/loginRequestCall'
import { Loader } from '../loader'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const dispatch = useDispatch()
  const [emailError, setEmailError] = useState(false)
  const [show, setShow] = useState(false)

  const { isFetching, error, loggedIn } = useSelector(
    (state: any) => state.user
  )

  const handleEmail = (e) => {
    setEmail(e.target.value)
    const verifyEmail = validateEmail(e.target.value)
    if (!verifyEmail) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    login(dispatch, email, password)
    showContent()
  }

  const showContent = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 2500)
  }

  useEffect(() => {
    loggedIn && router.push('/training')
  }, [loggedIn])

  return (
    <>
      <Container>
        <Left>
          <img src="assets/Gym.jpg" alt="" />
        </Left>
        <Right>
          <Title>
            <h2>Welcome back</h2>
          </Title>
          <FormContainer>
            <form action="">
              <p>Login to your account</p>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={handleEmail}
                onBlur={handleEmail}
              />

              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {emailError && <span>Invalid email</span>}
              {!error && show && !emailError && <Loader />}
              {error && !emailError && <span>something has gone wrong</span>}
            </form>
          </FormContainer>
          <ButtonContainer>
            <button onClick={handleLogin}>Login</button>
            <Link href={'/register'}>
              <a>don't have an account?</a>
            </Link>
          </ButtonContainer>
        </Right>
      </Container>
    </>
  )
}
