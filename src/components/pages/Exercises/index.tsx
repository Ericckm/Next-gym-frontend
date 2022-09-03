import ExercisesSection from '../../exercises'
import { SectionTemplate } from '../../sectionTemplate'
import { Topbar } from '../../topbar'

const Exercisespage = () => {
  return (
    <>
      <Topbar />
      <SectionTemplate>
        <ExercisesSection />
      </SectionTemplate>
    </>
  )
}

export default Exercisespage
