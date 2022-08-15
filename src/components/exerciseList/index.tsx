import { ButtonContainer, ExerciseDesc, ExerciseContainer } from './styles'

export const ExerciseList = ({ name, videoUrl, id, type, liked }) => {
  return (
    <>
      <ExerciseContainer>
        <ExerciseDesc>
          <p>{name}</p>
          <span>carga</span>
          <span>repeticao</span>
          <span>serie</span>
          <span>obs</span>
        </ExerciseDesc>
        <ButtonContainer>
          <button>check to localstorage</button>
          <button>edit log</button>
        </ButtonContainer>
      </ExerciseContainer>
    </>
  )
}
