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

  return (
    <TopbarMain>
      <MenuContainer>
        <div>
          <FitnessCenter className="icon" />
          <a href="exercises">Exercises</a>
        </div>
      </MenuContainer>
      <MenuContainer>
        <div>
          <Grade className="icon" />
          <a href="training">Training</a>
        </div>
      </MenuContainer>
      <MenuContainer>
        <div>
          <Person className="icon" />
          <a href="user">User</a>
        </div>
      </MenuContainer>
      <button onClick={handleLogout}>logout</button>
    </TopbarMain>
  )
}
