import { SectionTemplate } from '../../sectionTemplate'
import { Topbar } from '../../topbar'
import UserSection from '../../user'

const User = () => {
  return (
    <>
      <Topbar />
      <SectionTemplate>
        <UserSection />
      </SectionTemplate>
    </>
  )
}

export default User
