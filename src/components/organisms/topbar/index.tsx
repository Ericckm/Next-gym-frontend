import { Container, MenuContainer, TopbarMain } from './styles'
import { Person, FitnessCenter, Grade, ExitToApp } from '@material-ui/icons'
import { logout } from '../../../redux/userSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Topbar = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
    router.push('/')
  }

  const hrefPage = window.location.href.split('/').slice(-1)

  return (
    <TopbarMain>
      <Container>
        <MenuContainer
          className={hrefPage.includes('exercises') ? 'active' : null}
        >
          <Link href="/exercises">
            <a>
              <FitnessCenter className="icon" />
              Exercises
            </a>
          </Link>
        </MenuContainer>
        <MenuContainer
          className={hrefPage.includes('training') ? 'active' : null}
        >
          <Link href="/training">
            <a>
              <Grade className="icon" />
              Workout
            </a>
          </Link>
        </MenuContainer>
        <MenuContainer className={hrefPage.includes('user') ? 'active' : null}>
          <Link href="/user">
            <a>
              <Person className="icon" />
              User
            </a>
          </Link>
        </MenuContainer>
        <MenuContainer>
          <a onClick={handleLogout}>
            <ExitToApp className="icon" />
            Logout
          </a>
        </MenuContainer>
      </Container>
    </TopbarMain>
  )
}
