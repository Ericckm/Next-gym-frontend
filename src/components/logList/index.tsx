import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logRequestCall } from '../../services/logRequestCall'
import { ExerciseModal } from '../ExerciseModal'
import { ButtonContainer, ExerciseDesc, ExerciseContainer } from './styles'

export const LogList = ({ name, videoUrl, id }) => {
  const [openModal, setOpenModal] = useState(false)
  const dispatch = useDispatch()

  const { error, isFetching } = useSelector((state: any) => state.log)
  const logs = useSelector((state: any) => state.log.logs)

  function handleModal(e) {
    setOpenModal(true)
  }

  useEffect(() => {
    logRequestCall(dispatch, id)
    const handleLogs = () => {
      logs
        .filter((i) => i.exerciseOwner === id)
        .map((i) => {
          console.log(i)
        })
      //
    }
    handleLogs()
  }, [])

  return (
    <ExerciseContainer>
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
      {openModal && (
        <ExerciseModal name={name} onClick={() => setOpenModal(false)} />
      )}
      <ButtonContainer>
        <button>Remove exec</button>
        <button onClick={handleModal}>update log</button>
      </ButtonContainer>
    </ExerciseContainer>
  )
}
