import Head from 'next/head'
import { SectionTemplate } from '../components/sectionTemplate'
import { Topbar } from '../components/topbar'
import { TrainingSection } from '../components/trainingSection'

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
        <TrainingSection />
      </SectionTemplate>
    </>
  )
}

export default TrainingPage
