import Head from 'next/head'
import ExercisesSection from '../components/templates/exercises'
import { SectionTemplate } from '../components/organisms/sectionTemplate'
import { Topbar } from '../components/organisms/topbar'

const ExercisesPage = () => {
  return (
    <>
      <Head>
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
