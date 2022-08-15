import { SectionTemplate } from '../../sectionTemplate'
import { Topbar } from '../../topbar'
import { TrainingSection } from '../../trainingSection'

const Training = () => {
  return (
    <>
      <Topbar />
      <SectionTemplate>
        <TrainingSection />
      </SectionTemplate>
    </>
  )
}

export default Training
