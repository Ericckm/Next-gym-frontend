import Head from 'next/head'
import styled from 'styled-components'
import { ExerciseContainerBgImg } from '../components/atoms/exerciseContainerBgImg'
import { SectionTemplate } from '../components/organisms/sectionTemplate'
import { Register } from '../components/templates/register'

const RegisterMain = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('/assets/gymbackg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`

const Testpage = () => {
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <SectionTemplate>
        <ExerciseContainerBgImg />
      </SectionTemplate>
    </>
  )
}

export default Testpage
