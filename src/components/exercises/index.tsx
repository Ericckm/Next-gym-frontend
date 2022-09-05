import {
  Bottom,
  Container,
  FilterContainer,
  MainContent,
  Mid,
  Top
} from './styles'
import { AddCircle } from '@material-ui/icons'
import { useEffect } from 'react'
import { allExerciseRequestCall } from '../../services/allExerciseRequestCall'
import { useDispatch, useSelector } from 'react-redux'
import { AllExercisesList } from '../allExercisesList'

const ExercisesSection = () => {
  const dispatch = useDispatch()
  const token = useSelector((state: any) => state.user.user.token)
  const allExercises = useSelector(
    (state: any) => state.allExercises.allExercises
  )

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
              ? allExercises?.map((i) => (
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
        </Mid>
        <Bottom>
          <div>pagination</div>
          <div>
            <button>
              <AddCircle className="add" />
            </button>
          </div>
        </Bottom>
      </MainContent>
    </Container>
  )
}

export default ExercisesSection
