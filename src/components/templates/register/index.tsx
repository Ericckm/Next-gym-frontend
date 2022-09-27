import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../../services/loginRequestCall'
import { validateEmail } from '../../../utils/validateEmail'
import { Loader } from '../../atoms/loader'
import { ButtonContainer, Container, FormContainer, Title } from './styles'

export const Register = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({})
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
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
    if (emailError || passwordError) return
    register(dispatch, inputs)
  }

  const handleEmail = (e) => {
    const verifyEmail = validateEmail(e.target.value)
    if (!verifyEmail) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
  }

  const handlePassword = (e) => {
    const pass = e.target.value
    if (pass.length < 7) setPasswordError(true)
    if (pass.length >= 7) setPasswordError(false)
  }

  useEffect(() => {
    loggedIn && router.push('/workout')
  }, [loggedIn])

  return (
    <Container>
      <Title>
        <h2>Welcome</h2>
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
            onBlur={handleEmail}
          />
          {emailError && <span>invalid email</span>}
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            onBlur={handlePassword}
          />
          {passwordError && (
            <span>password must have at least 7 characters</span>
          )}
          {!error && !emailError && isFetching && <Loader />}
          {error && !emailError && <span>something has gone wrong</span>}
        </form>
      </FormContainer>
      <ButtonContainer>
        <button onClick={handleSubmit} disabled={isFetching}>
          Register
        </button>
        <Link href={'/'}>
          <a>already have an account?</a>
        </Link>
      </ButtonContainer>
    </Container>
  )
}
