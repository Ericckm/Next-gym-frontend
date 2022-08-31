import Link from 'next/link'
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
    sessionStorage.removeItem('token')
  }

  return (
    <TopbarMain>
      <MenuContainer>
        <Link href="/exercise">
          <div>
            <FitnessCenter className="icon" />
            <span>Exercises</span>
          </div>
        </Link>
      </MenuContainer>
      <MenuContainer>
        <Link href="/training">
          <div>
            <Grade className="icon" />
            <span>Training</span>
          </div>
        </Link>
      </MenuContainer>
      <MenuContainer>
        <Link href="/user">
          <div>
            <Person className="icon" />
            <span>User</span>
          </div>
        </Link>
      </MenuContainer>
      <button onClick={handleLogout}>logout</button>
    </TopbarMain>
  )
}
