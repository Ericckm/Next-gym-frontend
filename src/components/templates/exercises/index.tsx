import { Bottom, ExerciseUl, FilterContainer, Flipbtn, Top } from './styles'
import { Add } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import { allExerciseRequestCall } from '../../../services/allExerciseRequestCall'
import { useDispatch, useSelector } from 'react-redux'
import { AllExercisesList } from '../../molecules/allExercisesList'
import { AddExerciseModal } from '../../organisms/AddExerciseModal'
import { Loader } from '../../atoms/loader'
import { ApiError } from '../../atoms/500'
import { ExerciseContainer } from '../../organisms/exerciseContainer'
import { LogGraphic } from '../../molecules/logGraphic'
import { CircleLoader } from '../../atoms/CircleLoader'

const ExercisesSection = () => {
  const dispatch = useDispatch()
  const token = useSelector((state: any) => state.user.user.token)
  const { isFetching, error, allExercises } = useSelector(
    (state: any) => state.allExercises
  )
  const { exerciseWithLogs } = useSelector(
    (state: any) => state.exercisesWithLogs
  )

  // FILTER
  const [filters, setFilters] = useState({})
  const [filteredExercises, setFilteredExercises] = useState([])

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const pages = []
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItem = filteredExercises.slice(indexOfFirstItem, indexOfLastItem)

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
  const [openLogGraph, setOpenLogGraphModal] = useState(false)

  const handleClick = () => {
    setOpenModal(!openModal)
  }

  const handleLogGraphModal = () => {
    setOpenLogGraphModal(!openLogGraph)
  }

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }

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
  }, [filters, allExercises])

  return (
    <>
      <Top>
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
                all
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
      {!openLogGraph ? (
        <ExerciseContainer>
          {allExercises.length === 0 && <CircleLoader />}
          {isFetching && !error && <Loader />}
          <ExerciseUl>
            {error && <ApiError />}
            {currentItem?.map((i) => (
              <AllExercisesList
                key={i._id}
                name={i.name}
                type={i.type}
                videoUrl={i.videoUrl}
                id={i._id}
              />
            ))}
            <Flipbtn onClick={handleLogGraphModal}>Flip</Flipbtn>
          </ExerciseUl>
        </ExerciseContainer>
      ) : (
        <LogGraphic filters={filters} token={token}>
          <Flipbtn onClick={handleLogGraphModal}>Flip</Flipbtn>
        </LogGraphic>
      )}
      {openModal && <AddExerciseModal onClick={handleClick} />}
      <Bottom>
        <ul className="pageNumbers">{renderPageNumbers}</ul>
        <button onClick={handleClick}>
          <Add className="add" />
        </button>
      </Bottom>
    </>
  )
}

export default ExercisesSection
