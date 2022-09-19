import Head from 'next/head'
import styled from 'styled-components'
import { Register } from '../components/templates/register'

const RegisterMain = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Registerpage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Register</title>
      </Head>
      <RegisterMain>
        <Register />
      </RegisterMain>
    </>
  )
}

export default Registerpage
