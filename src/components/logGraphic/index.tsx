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
  const [param, setParam] = useState('load')

  // make another api call to get all exercises, liked or not liked
  useEffect(() => {
    setFilteredExercises(
      allExercises.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    )
  }, [filters, allExercises])

  const handleExerciseId = (e) => {
    const id = e.target.value
    allLogsRequestCall(dispatch, id, token)
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
          data: allLogs?.map((i) => i.load)
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
      </Top>
      <Mid>
        <ExercisesUl>
          {/* onclick grab exercise id to find in the graphcontainer and map logs */}
          {filteredExercises?.map((i: any) => (
            <li key={i._id}>
              <button onClick={handleExerciseId} value={i._id}>
                {i.name}
              </button>
            </li>
          ))}
        </ExercisesUl>
        <GraphContainer>
          <SpanContainer>
            <button onClick={() => setParam('load')}>Load</button>
            <button onClick={() => setParam('sets')}>Sets</button>
            <button onClick={() => setParam('reps')}>Reps</button>
          </SpanContainer>
          <ProgressionContainer>
            {allLogs.length > 0 ? (
              <GraphicChart chartData={chartData} chartOptions={chartOptions} />
            ) : (
              ''
            )}
          </ProgressionContainer>
        </GraphContainer>
      </Mid>
    </ExerciseContainer>
  )
}
