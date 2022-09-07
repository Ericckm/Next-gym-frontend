import { MenuContainer, TopbarMain } from './styles'
import { Person, FitnessCenter, Grade } from '@material-ui/icons'
import { logout } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

export const Topbar = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
    router.push('/login')
  }

  const hrefPage = window.location.href.split('/').slice(-1)

  return (
    <TopbarMain>
      <MenuContainer
        className={hrefPage.includes('exercises') ? 'active' : null}
      >
        <div>
          <FitnessCenter className="icon" />
          <a href="exercises">Exercises</a>
        </div>
      </MenuContainer>
      <MenuContainer
        className={hrefPage.includes('training') ? 'active' : null}
      >
        <div>
          <Grade className="icon" />
          <a href="training">Training</a>
        </div>
      </MenuContainer>
      <MenuContainer className={hrefPage.includes('user') ? 'active' : null}>
        <div>
          <Person className="icon" />
          <a href="user">User</a>
        </div>
      </MenuContainer>
      <button onClick={handleLogout}>logout</button>
    </TopbarMain>
  )
}
