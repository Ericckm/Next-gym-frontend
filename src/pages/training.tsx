import Head from 'next/head'
import Training from '../components/pages/Traning'

const Trainingpage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Training</title>
      </Head>
      <Training />
    </>
  )
}

export default Trainingpage
