import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NotFound } from '../components/404'

const NotFoundPage = () => {
  const router = useRouter()
  const { loggedIn } = useSelector((state: any) => state.user)
  console.log(loggedIn)

  useEffect(() => {
    setTimeout(() => {
      loggedIn ? router.push('/training') : router.push('/')
    }, 2000)
  }, [])

  return <NotFound />
}

export default NotFoundPage
