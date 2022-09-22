import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allLogsRequestCall } from '../../../services/logRequestCall'
import { ExerciseContainer } from '../../organisms/exerciseContainer'
import { GraphicChart } from '../../atoms/graphicChart'
import {
  ExercisesUl,
  GraphContainer,
  Mid,
  ProgressionContainer,
  SpanContainer,
  Top
} from './styles'
import { exerciseWithLogRequestCall } from '../../../services/exercisesWithLogs'

export const LogGraphic = ({ children, filters, token }) => {
  const { allLogs } = useSelector((state: any) => state.allLogs)
  const [currentItem, setCurrentItem] = useState('')
  const [filteredExercises, setFilteredExercises] = useState([])
  const [chartData, setChartData] = useState({})
  const [chartOptions, setChartOptions] = useState({})
  const [param, setParam] = useState('load')
  const dispatch = useDispatch()
  const { isFetching, error, exerciseWithLogs } = useSelector(
    (state: any) => state.exercisesWithLogs
  )

  useEffect(() => {
    exerciseWithLogRequestCall(dispatch, token)
  }, [])

  // make another api call to get all exercises, liked or not liked
  useEffect(() => {
    setFilteredExercises(
      exerciseWithLogs.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    )
  }, [filters])

  const handleExerciseId = (e) => {
    const id = e.target.value
    allLogsRequestCall(dispatch, id, token)
    setCurrentItem(e.target.value)
  }

  const handleParams = (e) => {
    setParam(e.target.value)
  }

  useEffect(() => {
    setChartData({
      labels: allLogs?.map((i) =>
        longEnUSFormatter.format(new Date(i.createdAt))
      ),
      datasets: [
        {
          labels: 'Log Chart',
          backgroundColor: 'rgb(255, 99, 132)',
          data: allLogs?.map(
            (i) =>
              (param == 'load' && i.load) ||
              (param == 'sets' && i.sets) ||
              (param == 'reps' && i.reps) ||
              (param == 'rest' && i.rest)
          )
        }
      ]
    })
    setChartOptions({
      maintainAspectRatio: false,
      legend: {
        labels: {
          fontSize: 16
        }
      }
    })
  }, [allLogs, param])

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
            {currentItem ? (
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
