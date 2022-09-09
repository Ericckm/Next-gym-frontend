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

  // FILTER
  const [filters, setFilters] = useState({})
  const [filteredExercises, setFilteredExercises] = useState([])
  const [activeFilters, setActiveFilters] = useState(true)

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const pages = []
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItem = filteredExercises.slice(indexOfFirstItem, indexOfLastItem)

  console.log('paginação', currentPage)

  for (
    let i = 1;
    i <= Math.ceil(filteredExercises.length / itemsPerPage);
    i++
  ) {
    pages.push(i)
  }

  const renderPageNumbers = pages.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={() => setCurrentPage(number)}
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

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }
  console.log('filtros', filters)
  console.log('exercisefiltrado', filteredExercises)

  useEffect(() => {
    allExerciseRequestCall(dispatch, token)
  }, [])

  useEffect(() => {
    setFilteredExercises(
      allExercises.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    )
  }, [filters])

  return (
    <Container>
      <MainContent>
        <Top>
          <div>
            <p>All exercises</p>
          </div>
          <FilterContainer>
            <div>
              <label>filter by name</label>
              <input
                type="text"
                placeholder="search"
                name="name"
                onChange={handleFilters}
              />
            </div>
            <div>
              <label htmlFor="">filter by type</label>
              <select name="type" onChange={handleFilters}>
                <option defaultChecked value="">
                  clear
                </option>
                <option value="Chest">chest</option>
                <option value="Triceps">triceps</option>
                <option value="Back">back</option>
                <option value="Biceps">biceps</option>
                <option value="Leg">leg</option>
                <option value="Shoulder">shoulder</option>
              </select>
            </div>
          </FilterContainer>
        </Top>
        <Mid>
          <ul>
            {!activeFilters
              ? currentItem?.map((i) => (
                  <AllExercisesList
                    key={i._id}
                    name={i.name}
                    type={i.type}
                    videoUrl={i.videoUrl}
                    id={i._id}
                  />
                ))
              : currentItem?.map((i) => (
                  <AllExercisesList
                    key={i._id}
                    name={i.name}
                    type={i.type}
                    videoUrl={i.videoUrl}
                    id={i._id}
                  />
                ))}

            {/* {allExercises
              ? currentItem?.map((i) => (
                  <AllExercisesList
                    key={i._id}
                    name={i.name}
                    type={i.type}
                    videoUrl={i.videoUrl}
                    id={i._id}
                  />
                ))
              : ''} */}
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
