import Head from 'next/head'
import { SectionTemplate } from '../components/organisms/sectionTemplate'
import { Topbar } from '../components/organisms/topbar'
import { Workout } from '../components/templates/workout'

const WorkoutMain = () => {
  return (
    <>
      <Head>
        <title>Workout</title>
      </Head>
      <Topbar />
      <SectionTemplate>
        <Workout />
      </SectionTemplate>
    </>
  )
}

export default WorkoutMain
