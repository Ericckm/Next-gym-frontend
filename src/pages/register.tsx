import Head from 'next/head'
import styled from 'styled-components'
import { Register } from '../components/templates/register'

const RegisterMain = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('/assets/gymbackg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`

const Registerpage = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterMain>
        <Register />
      </RegisterMain>
    </>
  )
}

export default Registerpage
