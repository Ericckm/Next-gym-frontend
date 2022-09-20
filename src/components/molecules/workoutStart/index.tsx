import { useDispatch, useSelector } from 'react-redux'
import { startExercise } from '../../../redux/exerciseSlice'
import { LogList } from '../logList'
import { ButtonContainer, ExerciseDesc, ExerciseItemContainer } from './styles'

export const WorkoutStart = ({ name, videoUrl, id, type, liked }) => {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(startExercise(id))
  }

  return (
    <ExerciseItemContainer>
      <ExerciseDesc>
        <p>{name}</p>
        <LogList id={id} />
      </ExerciseDesc>
      <ButtonContainer>
        <button onClick={handleClick}>Done</button>
      </ButtonContainer>
    </ExerciseItemContainer>
  )
}
