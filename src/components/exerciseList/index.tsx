import { useEffect, useState } from 'react'
import { handleLogRequestCall } from '../../services/logRequestCall'
import { ExerciseModal } from '../ExerciseModal'
import { ButtonContainer, ExerciseDesc, ExerciseContainer } from './styles'

export const ExerciseList = ({ name, videoUrl, id, type, liked }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    async function getData() {
      const responseApi = await handleLogRequestCall(id)
      if (responseApi.status !== 500) {
        setData(responseApi.data.log)
        setLoading(false)
      } else {
        setError(true)
      }
    }
    getData()
  }, [])

  return (
    <>
      <ExerciseContainer>
        {data?.map((i) => (
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
