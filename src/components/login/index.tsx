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
  const [emailError, setEmailError] = useState('')

  const token = sessionStorage.getItem('token')

  const { isFetching, error, loggedIn } = useSelector(
    (state: any) => state.user
  )

  const handleEmail = (e: any) => {
    setEmail(e.target.value)
    const verifyEmail = validateEmail(e.target.value)
    if (!verifyEmail) {
      setEmailError('Invalid email')
    } else {
      setEmailError('')
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    login(dispatch, email, password)
    showContent()
  }

  const [show, setShow] = useState(false)

  const showContent = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  useEffect(() => {
    token && router.push('/training')
  }, [token])

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
              {<span>{emailError}</span>}

              {!error && show && emailError === '' && <Loader />}
              {error && emailError === '' && (
                <span>something has gone wrong</span>
              )}
            </form>
          </FormContainer>
          <ButtonContainer>
            <button onClick={(e) => handleLogin(e)}>Login</button>
            <Link href={'/register'}>don't have an account?</Link>
          </ButtonContainer>
        </Right>
      </Container>
    </>
  )
}
