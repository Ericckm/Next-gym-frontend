import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logRequestCall } from '../../services/logRequestCall'
import { ExerciseModal } from '../ExerciseModal'
import { ButtonContainer, ExerciseDesc, ExerciseContainer } from './styles'

export const ExerciseList = ({ name, videoUrl, id, type, liked }) => {
  // const [data, setData] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(false)
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
            </ExerciseDesc>
          ))}
        <ButtonContainer>
          <button>Remove</button>
          <button onClick={handleModal}>add</button>
        </ButtonContainer>
      </ExerciseContainer>
      {openModal && (
        <ExerciseModal name={name} onClick={() => setOpenModal(false)} />
      )}
    </>
  )
}
