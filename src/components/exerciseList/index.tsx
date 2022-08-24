import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logRequestCall } from '../../services/logRequestCall'
import { ExerciseModal } from '../ExerciseModal'
import { ButtonContainer, ExerciseDesc, ExerciseContainer } from './styles'

export const ExerciseList = ({ name, videoUrl, id, type, liked }) => {
  // const [data, setData] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()

  const { error, isFetching } = useSelector((state: any) => state.log)
  const logs = useSelector((state: any) => state.log.logs)
  console.log('os logs', logs)

  const token = useSelector((state: any) => state.user.user.token)

  useEffect(() => {
    logRequestCall(dispatch, token, id)
  }, [id])

  // useEffect(() => {
  //   async function getData() {
  //     const responseApi = await handleLogRequestCall(id)
  //     if (responseApi.status !== 500) {
  //       setData(responseApi.data.log)
  //       setLoading(false)
  //     } else {
  //       setError(true)
  //     }
  //   }
  //   getData()
  // }, [])

  return (
    <>
      <ExerciseContainer>
        {logs
          ?.filter((i) => i.exerciseOwner === id)
          .map((i) => (
            <ExerciseDesc>
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
            </ExerciseDesc>
          ))}
        <ButtonContainer>
          <button>Liked</button>
          <button onClick={() => setModalOpen(true)}>edit</button>
        </ButtonContainer>
      </ExerciseContainer>
      {modalOpen && <ExerciseModal />}
    </>
  )
}
