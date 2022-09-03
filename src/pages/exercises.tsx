import Head from 'next/head'
import Exercisespage from '../components/pages/Exercises'

const ExercisesPage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>exercises</title>
      </Head>
      <Exercisespage />
    </>
  )
}

export default ExercisesPage
