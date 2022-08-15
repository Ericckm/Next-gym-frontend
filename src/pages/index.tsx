import Head from 'next/head'
import Homepage from '../components/pages/Homepage'

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Home</title>
      </Head>
      <Homepage />
    </>
  )
}

export default Home
