import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logRequestCall } from '../../services/logRequestCall'
import { ExerciseModal } from '../ExerciseModal'

import { ButtonContainer, ExerciseDesc, ExerciseContainer } from './styles'

export const ExerciseList = ({ name, videoUrl, id, type, liked }) => {
  const [openModal, setOpenModal] = useState(false)
  const dispatch = useDispatch()

  const { error, isFetching } = useSelector((state: any) => state.log)
  const logs = useSelector((state: any) => state.log.logs)

  function handleModal() {
    setOpenModal(true)
  }

  useEffect(() => {
    logRequestCall(dispatch, id)
  }, [])

  return (
    <ExerciseContainer>
      {logs
        ?.filter((i) => i.exerciseOwner !== id)
        ?.map((i) => (
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
        ?.map((i) => (
          <ExerciseDesc key={i._id}>
            <p>
              {name}
              <a href={videoUrl} target="_blank">
                Vídeo
              </a>
            </p>
            <span>Load - {i.load}kg</span>
            <span>Sets - {i.sets}x</span>
            <span>Reps {i.reps} - times</span>
            <span>Rest - {i.rest}</span>
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
        ))}
      <ButtonContainer>
        <button>Remove exec</button>
        <button onClick={handleModal}>update log</button>
      </ButtonContainer>
    </ExerciseContainer>
  )
}
