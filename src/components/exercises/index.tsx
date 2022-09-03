import {
  Bottom,
  Container,
  FilterContainer,
  MainContent,
  Mid,
  Top
} from './styles'
import { AddCircle } from '@material-ui/icons'

const ExercisesSection = () => {
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
        <Mid>exercicios</Mid>
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
