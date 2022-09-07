import {
  Bottom,
  Container,
  FilterContainer,
  MainContent,
  Mid,
  Top
} from './styles'
import { AddCircle } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import { allExerciseRequestCall } from '../../services/allExerciseRequestCall'
import { useDispatch, useSelector } from 'react-redux'
import { AllExercisesList } from '../allExercisesList'
import { AddExerciseModal } from '../AddExerciseModal'

const ExercisesSection = () => {
  const dispatch = useDispatch()
  const token = useSelector((state: any) => state.user.user.token)
  const allExercises = useSelector(
    (state: any) => state.allExercises.allExercises
  )

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(1)
  const pages = []
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItem = allExercises.slice(indexOfFirstItem, indexOfLastItem)

  for (let i = 1; i <= Math.ceil(allExercises.length / itemsPerPage); i++) {
    pages.push(i)
  }

  const handlePagination = (e) => {
    setCurrentPage(Number(e.target.id))
  }

  const renderPageNumbers = pages.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={handlePagination}
        className={currentPage == number ? 'active' : null}
      >
        {number}
      </li>
    )
  })

  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(!openModal)
  }

  useEffect(() => {
    allExerciseRequestCall(dispatch, token)
  }, [])

  return (
    <Container>
      <MainContent>
        <Top>
          <div>
            <p>All exercises</p>
          </div>
          <FilterContainer>
            <div>
              <label htmlFor="">filter by name</label>
              <input type="text" placeholder="search" />
            </div>
            <div>
              <label htmlFor="">filter by type</label>
              <select name="type">
                <option defaultChecked disabled>
                  select
                </option>
                <option value="chest">chest</option>
                <option value="triceps">triceps</option>
                <option value="back">back</option>
                <option value="biceps">biceps</option>
                <option value="leg">leg</option>
                <option value="shoulder">shoulder</option>
              </select>
            </div>
          </FilterContainer>
        </Top>
        <Mid>
          <ul>
            {allExercises
              ? currentItem?.map((i) => (
                  <AllExercisesList
                    key={i.createdAt}
                    name={i.name}
                    type={i.type}
                    videoUrl={i.videoUrl}
                    id={i._id}
                  />
                ))
              : ''}
          </ul>
          {openModal && <AddExerciseModal onClick={handleClick} />}
        </Mid>
        <Bottom>
          <ul className="pageNumbers">{renderPageNumbers}</ul>
          <div>
            <button onClick={handleClick}>
              <AddCircle className="add" />
            </button>
          </div>
        </Bottom>
      </MainContent>
    </Container>
  )
}

export default ExercisesSection
