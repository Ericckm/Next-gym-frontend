import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NotFound } from '../components/atoms/404'

const NotFoundPage = () => {
  const router = useRouter()
  const { loggedIn } = useSelector((state: any) => state.user)

  useEffect(() => {
    loggedIn ? router.push('/workout') : router.push('/')
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <title>404</title>
      </Head>
      <NotFound />
    </>
  )
}

export default NotFoundPage
