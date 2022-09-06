import Head from 'next/head'
import ExercisesSection from '../components/exercises'
import { SectionTemplate } from '../components/sectionTemplate'
import { Topbar } from '../components/topbar'

const ExercisesPage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Exercises</title>
      </Head>
      <Topbar />
      <SectionTemplate>
        <ExercisesSection />
      </SectionTemplate>
    </>
  )
}

export default ExercisesPage
