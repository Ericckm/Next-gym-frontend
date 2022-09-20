import Head from 'next/head'
import { SectionTemplate } from '../components/organisms/sectionTemplate'
import { Topbar } from '../components/organisms/topbar'
import UserSection from '../components/templates/user'

const UserPage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
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
