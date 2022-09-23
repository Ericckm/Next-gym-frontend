import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { likedExercisePutCall } from '../../../services/exerciseRequestCall'
import { AddLogModal } from '../../organisms/AddLogModal'
import { LogList } from '../logList'

import { ButtonContainer, ExerciseDesc, ExerciseItemContainer } from './styles'

export const ExerciseList = ({ name, videoUrl, id, type, liked }) => {
  const [openModal, setOpenModal] = useState(false)
  const dispatch = useDispatch()
  const { token } = useSelector((state: any) => state.user.user)

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  const handleLiked = () => {
    likedExercisePutCall(dispatch, token, id)
  }

  return (
    <ExerciseItemContainer>
      <ExerciseDesc>
        <p>
          {name}
          <a href={videoUrl} target="_blank">
            Vídeo
          </a>
        </p>
        {openModal && (
          <AddLogModal
            name={name}
            execId={id}
            load={''}
            sets={''}
            reps={''}
            rest={''}
            onClick={handleModal}
          />
        )}
        <LogList id={id} />
      </ExerciseDesc>
      <ButtonContainer>
        <button onClick={handleLiked}>Remove</button>
        <button onClick={handleModal}>Create</button>
      </ButtonContainer>
    </ExerciseItemContainer>
  )
}
