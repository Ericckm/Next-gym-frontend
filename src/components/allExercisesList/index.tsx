import {
  ButtonContainer,
  Content,
  ExerciseContainer,
  ExerciseDesc,
  Left,
  Right,
  Title
} from './styles'
import { Grade } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { unLikeExercisePutCall } from '../../services/allExerciseRequestCall'

export const AllExercisesList = ({ name, type, videoUrl, id }) => {
  const dispatch = useDispatch()
  const token = useSelector((state: any) => state.user.user.token)

  const handleLiked = () => {
    unLikeExercisePutCall(dispatch, token, id)
  }

  return (
    <ExerciseContainer>
      <ExerciseDesc>
        <Left>
          <Title>
            <p>{name}</p>
          </Title>
          <Content>
            <span>Type - {type}</span>
            <a href={videoUrl} target="_blank">
              Video
            </a>
          </Content>
        </Left>
        <Right>
          <ButtonContainer>
            <button onClick={handleLiked}>
              <Grade className="icon" />
              <span>add</span>
            </button>
          </ButtonContainer>
        </Right>
      </ExerciseDesc>
    </ExerciseContainer>
  )
}
