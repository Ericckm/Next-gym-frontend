import Head from 'next/head'
import { SectionTemplate } from '../components/organisms/sectionTemplate'
import { Topbar } from '../components/organisms/topbar'
import UserSection from '../components/templates/user'

const UserPage = () => {
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <Topbar />
      <SectionTemplate>
        <UserSection />
      </SectionTemplate>
    </>
  )
}

export default UserPage
