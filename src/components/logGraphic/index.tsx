import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allLogsRequestCall } from '../../services/logRequestCall'
import { ExerciseContainer } from '../exerciseContainer'
import { GraphicChart } from '../graphicChart'
import {
  ExercisesUl,
  GraphContainer,
  Mid,
  ProgressionContainer,
  SpanContainer,
  Top
} from './styles'

export const LogGraphic = ({ children, filters, token }) => {
  const dispatch = useDispatch()
  const { isFetching, error, allExercises } = useSelector(
    (state: any) => state.allExercises
  )
  const [filteredExercises, setFilteredExercises] = useState([])
  const { allLogs } = useSelector((state: any) => state.allLogs)

  // make another api call to get all exercises, liked or not liked
  useEffect(() => {
    setFilteredExercises(
      allExercises.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    )
  }, [filters])

  const [currentItem, setCurrentItem] = useState('')
  const handleExerciseId = (e) => {
    const id = e.target.value
    allLogsRequestCall(dispatch, id, token)
    setCurrentItem(e.target.value)
  }

  const [param, setParam] = useState('load')
  const handleParams = (e) => {
    setParam(e.target.value)
  }

  const [chartData, setChartData] = useState({})
  const [chartOptions, setchartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: allLogs?.map((i) =>
        longEnUSFormatter.format(new Date(i.createdAt))
      ),
      datasets: [
        {
          labels: 'Log Chart',
          backgroundColor: 'rgb(255, 99, 132)',
          data: allLogs?.map((i) => i.sets)
        }
      ]
    })
    setchartOptions({
      maintainAspectRatio: false,
      legend: {
        labels: {
          fontSize: 16
        }
      }
    })
  }, [allLogs])

  const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric'
  })

  return (
    <ExerciseContainer>
      {children}
      <Top>
        <h2>Select an exercise to check your progress</h2>
        <ExercisesUl>
          {/* onclick grab exercise id to find in the graphcontainer and map logs */}
          {filteredExercises?.map((i: any) => (
            <li key={i._id} className={currentItem == i._id ? 'active' : null}>
              <button onClick={handleExerciseId} value={i._id}>
                {i.name}
              </button>
            </li>
          ))}
        </ExercisesUl>
      </Top>
      <Mid>
        <GraphContainer>
          <SpanContainer>
            <button
              onClick={handleParams}
              value="load"
              className={param == 'load' ? 'active' : null}
            >
              Load
            </button>
            <button
              onClick={handleParams}
              value="sets"
              className={param == 'sets' ? 'active' : null}
            >
              Sets
            </button>
            <button
              onClick={handleParams}
              value="reps"
              className={param == 'reps' ? 'active' : null}
            >
              Reps
            </button>
            <button
              onClick={handleParams}
              value="rest"
              className={param == 'rest' ? 'active' : null}
            >
              Rest
            </button>
          </SpanContainer>
          <ProgressionContainer>
            {allLogs.length > 0 ? (
              <GraphicChart chartData={chartData} chartOptions={chartOptions} />
            ) : (
              <span>There's no data about this exercise yet</span>
            )}
          </ProgressionContainer>
        </GraphContainer>
      </Mid>
    </ExerciseContainer>
  )
}
