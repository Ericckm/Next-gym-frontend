import Head from 'next/head'
import { SectionTemplate } from '../components/organisms/sectionTemplate'
import { Topbar } from '../components/organisms/topbar'
import { Workout } from '../components/templates/workout'

const WorkoutMain = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
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
