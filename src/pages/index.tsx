import Head from 'next/head'
import styled from 'styled-components'
import { Login } from '../components/templates/login'

const HomepageMain = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HomePage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Home</title>
      </Head>
      <HomepageMain>
        <Login />
      </HomepageMain>
    </>
  )
}

export default HomePage
