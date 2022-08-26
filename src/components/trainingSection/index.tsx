import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { exerciseRequestCall } from '../../services/exerciseRequestCall'
import { ExerciseList } from '../exerciseList'
import { Container, MainContent, Title } from './styles'

export const TrainingSection = () => {
  const dispatch = useDispatch()
  const { exercises, error, isFetching } = useSelector(
    (state: any) => state.exercise
  )

  const { name } = useSelector((state: any) => state.user.user.user)

  // training select logic
  const [training, setTraining] = useState(1)

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
    exerciseRequestCall(dispatch)
  }, [])

  return (
    <>
      <Container>
        <Title>
          <h2>
            Welcome to our app {name.charAt().toUpperCase() + name.slice(1)},
            your training was divided into three parts.
          </h2>
          <span>Select a training</span>
          <select onChange={selectHandler}>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
          </select>
          <label>
            this training works the <span>{typeA} </span>
            and <span>{typeB}</span> musculature
          </label>
        </Title>
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
      </Container>
    </>
  )
}
