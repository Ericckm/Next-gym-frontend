import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { exerciseRequestCall } from '../../services/exerciseRequestCall'
import { ExerciseList } from '../exerciseList'
import { Loader } from '../loader'
import { Container, MainContent, Title } from './styles'

export const TrainingSection = () => {
  const dispatch = useDispatch()
  const { exercises, error, isFetching } = useSelector(
    (state: any) => state.exercise
  )

  const { name } = useSelector((state: any) => state.user.user.user)
  const { token } = useSelector((state: any) => state.user.user)

  // training select logic
  const [training, setTraining] = useState(0)

  function selectHandler(e) {
    setTraining(parseInt(e.target.value))
  }

  let typeA
  let typeB

  function trainingType() {
    switch (training) {
      case 1:
        typeA = 'Back'
        typeB = 'Biceps'
        break
      case 2:
        typeA = 'Chest'
        typeB = 'Triceps'
        break
      case 3:
        typeA = 'Shoulder'
        typeB = 'Leg'
        break
      default:
    }
  }
  trainingType()

  useEffect(() => {
    exerciseRequestCall(dispatch, token)
  }, [])

  return (
    <Container>
      <Title>
        <h2>
          Welcome to our app {name.charAt().toUpperCase() + name.slice(1)}, your
          training was divided into three parts.
        </h2>
        <label>Select a training below</label>
        <select onChange={selectHandler}>
          <option value="1">A</option>
          <option value="2">B</option>
          <option value="3">C</option>
        </select>
        {training !== 0 && (
          <p>
            this training works the <span>{typeA} </span>
            and <span>{typeB}</span> musculature
          </p>
        )}
      </Title>
      {!exercises && isFetching ? (
        <Loader />
      ) : (
        <MainContent>
          {exercises
            ?.filter((i) => i.type === typeA || i.type === typeB)
            .map((i) => (
              <ExerciseList
                key={i._id}
                name={i.name}
                videoUrl={i.videoUrl}
                type={i.type}
                liked={i.liked}
                id={i._id}
              />
            ))}
        </MainContent>
      )}
    </Container>
  )
}
