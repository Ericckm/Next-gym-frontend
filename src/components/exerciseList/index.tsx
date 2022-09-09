import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { likedExercisePutCall } from '../../services/exerciseRequestCall'
import { AddLogModal } from '../AddLogModal'
import { LogList } from '../logList'

import { ButtonContainer, ExerciseDesc, ExerciseContainer } from './styles'

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
    <ExerciseContainer>
      <ExerciseDesc>
        <p>
          {name} -
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
      {/* {logs
        ?.filter((i) => i.exerciseOwner !== id)
        .map((i) => (
          <ExerciseDesc key={i._id}>
            <p>
              {name}
              <a href={videoUrl} target="_blank">
                Vídeo
              </a>
            </p>
            <div>
              <span>There's no training schedule for this exercise</span>
            </div>
            {openModal && (
              <ExerciseModal
                name={name}
                id={id}
                onClick={() => setOpenModal(false)}
              />
            )}
          </ExerciseDesc>
        ))}
      {logs
        ?.filter((i) => i.exerciseOwner === id)
        .map((i) => (
          <ExerciseDesc key={i._id}>
            <p>
              {name}
              <a href={videoUrl} target="_blank">
                Vídeo
              </a>
            </p>
            <span>Load - {i.load} kg</span>
            <span>Sets - {i.sets} x</span>
            <span>Reps - {i.reps} times</span>
            <span>Rest - {i.rest} seconds</span>
            {openModal && (
              <ExerciseModal
                name={name}
                id={id}
                load={i.load}
                sets={i.sets}
                reps={i.reps}
                rest={i.rest}
                onClick={() => setOpenModal(false)}
              />
            )}
          </ExerciseDesc>
        ))} */}
    </ExerciseContainer>
  )
}
