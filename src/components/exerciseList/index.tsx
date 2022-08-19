import { ButtonContainer, ExerciseDesc, ExerciseContainer } from './styles'

export const ExerciseList = ({ name, videoUrl, id, type, liked }) => {
  return (
    <>
      <ExerciseContainer>
        <ExerciseDesc>
          <p>{name}</p>
          <span>Load - kg</span>
          <span>Sets - </span>
          <span>Reps -</span>
          <span>Rest - seconds</span>
        </ExerciseDesc>
        <ButtonContainer>
          <button>fav</button>
          <button>edit</button>
        </ButtonContainer>
      </ExerciseContainer>
    </>
  )
}
