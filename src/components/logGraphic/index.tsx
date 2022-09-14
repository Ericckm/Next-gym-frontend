import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ExerciseContainer } from '../exerciseContainer'
import {
  ExercisesUl,
  FilterContainer,
  GraphContainer,
  Mid,
  ProgressionContainer,
  SpanContainer,
  Top
} from './styles'

export const LogGraphic = ({ children }) => {
  const { isFetching, error, allExercises } = useSelector(
    (state: any) => state.allExercises
  )
  const [filter, setFilter] = useState('')

  const handleFilters = (e) => {
    setFilter(e.target.value)
  }

  return (
    <ExerciseContainer>
      {children}
      <Top>
        <h2>exercise name</h2>
        <FilterContainer>
          <label>filter by name</label>
          <input
            type="text"
            placeholder="search"
            name="name"
            onChange={handleFilters}
          />
        </FilterContainer>
      </Top>
      <Mid>
        <ExercisesUl>
          {/* onclick grab exercise id to find in the graphcontainer and map logs */}
          {allExercises?.map((i) => (
            <li>
              <button>{i.name}</button>
            </li>
          ))}
        </ExercisesUl>
        <GraphContainer>
          {/* find exercise and map to progression and span
          {allExercises.find()} */}
          <SpanContainer>
            <button>Load</button>
            <button>Sets</button>
            <button>Reps</button>
          </SpanContainer>
          <ProgressionContainer>graphic</ProgressionContainer>
        </GraphContainer>
      </Mid>
    </ExerciseContainer>
  )
}
