import Head from 'next/head'
import Register from '../components/pages/Register'

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
      <Register />
    </>
  )
}

export default Registerpage
