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

  function handleModal(e) {
    setOpenModal(true)
  }

  useEffect(() => {
    logRequestCall(dispatch, id)
  }, [])

  return (
    <ExerciseContainer>
      {logs ? (
        logs
          .filter((i) => i.exerciseOwner === id)
          .map((i) => (
            <ExerciseDesc>
              <p>
                {name}
                <a href={videoUrl} target="_blank">
                  Vídeo
                </a>
              </p>
              <span>Load - kg</span>
              <span>Sets - x</span>
              <span>Reps {i.load} - times</span>
              <span>Rest - seconds</span>
              {openModal && (
                <ExerciseModal
                  name={name}
                  load={1}
                  sets={1}
                  reps={1}
                  rest={1}
                  onClick={() => setOpenModal(false)}
                />
              )}
            </ExerciseDesc>
          ))
      ) : (
        <ExerciseDesc>
          <p>
            {name}
            <a href={videoUrl} target="_blank">
              Vídeo
            </a>
          </p>
          <span>Load - kg</span>
          <span>Sets - x</span>
          <span>Reps - times</span>
          <span>Rest - seconds</span>
        </ExerciseDesc>
      )}
      <ButtonContainer>
        <button>Remove exec</button>
        <button onClick={handleModal}>update log</button>
      </ButtonContainer>
    </ExerciseContainer>
  )
}
