import Head from 'next/head'
import { SectionTemplate } from '../components/organisms/sectionTemplate'
import { Topbar } from '../components/organisms/topbar'
import { Workout } from '../components/templates/workout'

const TrainingPage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Training</title>
      </Head>
      <Topbar />
      <SectionTemplate>
        <Workout />
      </SectionTemplate>
    </>
  )
}

export default TrainingPage
