import Head from 'next/head'
import ExercisesSection from '../components/templates/exercises'
import { SectionTemplate } from '../components/organisms/sectionTemplate'
import { Topbar } from '../components/organisms/topbar'

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
