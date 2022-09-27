import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { exerciseRequestCall } from '../../../services/exerciseRequestCall'
import { ApiError } from '../../atoms/500'
import { ExerciseList } from '../../molecules/exerciseList'
import { Loader } from '../../atoms/loader'
import { Bottom, ExerciseUl, Title } from './styles'
import { ExerciseContainer } from '../../organisms/exerciseContainer'
import { PlayArrow, Stop } from '@material-ui/icons'
import { WorkoutStart } from '../../molecules/workoutStart'
import { WorkoutStartTitle } from '../../atoms/workoutStartTitle'

export const Workout = () => {
  const dispatch = useDispatch()
  const { exercises, error, isFetching } = useSelector(
    (state: any) => state.exercise
  )

  const { name } = useSelector((state: any) => state.user.user.user)
  const { token } = useSelector((state: any) => state.user.user)

  // training select logic
  const [training, setTraining] = useState(0)
  const [filter, setFilter] = useState({
    typeA: '',
    typeB: ''
  })

  function selectHandler(e) {
    setTraining(parseInt(e.target.value))
  }

  useEffect(() => {
    if (training === 1) {
      setFilter({ typeA: 'Back', typeB: 'Biceps' })
    } else if (training === 2) {
      setFilter({ typeA: 'Chest', typeB: 'Triceps' })
    } else {
      setFilter({ typeA: 'Shoulder', typeB: 'Leg' })
    }
  }, [training])

  const handleStart = () => {
    setStartWorkout(!startWorkout)
  }

  useEffect(() => {
    exerciseRequestCall(dispatch, token)
  }, [])

  const [startWorkout, setStartWorkout] = useState(false)

  return (
    <>
      {!startWorkout ? (
        <Title>
          <h3>
            Welcome <span>{name.charAt().toUpperCase() + name.slice(1)}, </span>
            your training is divided into three parts.
          </h3>
          <p>Select a training below</p>
          <select onChange={selectHandler}>
            <option defaultChecked value="0">
              here
            </option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
          </select>
          {training !== 0 && (
            <p>
              this training focuses on <span>{filter.typeA} </span>
              and <span>{filter.typeB}</span> musculature
            </p>
          )}
        </Title>
      ) : (
        <WorkoutStartTitle />
      )}
      <ExerciseContainer>
        {isFetching && !error ? (
          <Loader />
        ) : (
          <ExerciseUl>
            {error && <ApiError />}
            {!startWorkout && training !== 0
              ? exercises
                  ?.filter(
                    (i) => i.type === filter.typeA || i.type === filter.typeB
                  )
                  .map((i) => (
                    <ExerciseList
                      key={i._id}
                      name={i.name}
                      videoUrl={i.videoUrl}
                      type={i.type}
                      liked={i.liked}
                      id={i._id}
                    />
                  ))
              : training !== 0 &&
                exercises
                  ?.filter(
                    (i) => i.type === filter.typeA || i.type === filter.typeB
                  )
                  .map((i) => (
                    <WorkoutStart
                      key={i._id}
                      name={i.name}
                      videoUrl={i.videoUrl}
                      type={i.type}
                      liked={i.liked}
                      id={i._id}
                    />
                  ))}
          </ExerciseUl>
        )}
      </ExerciseContainer>
      <Bottom>
        <button onClick={handleStart}>
          {!startWorkout ? (
            <>
              <p>Start the workout !</p> <PlayArrow className="start" />
            </>
          ) : (
            <>
              <p>Finish</p> <Stop className="start" />
            </>
          )}
        </button>
      </Bottom>
    </>
  )
}
