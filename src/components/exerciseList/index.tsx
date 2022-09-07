import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { likedExercisePutCall } from '../../services/exerciseRequestCall'
import { logRequestCall } from '../../services/logRequestCall'
import { ExerciseModal } from '../ExerciseModal'
import { LogList } from '../logList'

import { ButtonContainer, ExerciseDesc, ExerciseContainer } from './styles'

export const ExerciseList = ({ name, videoUrl, id, type, liked }) => {
  const [openModal, setOpenModal] = useState(false)
  const dispatch = useDispatch()
  const { token } = useSelector((state: any) => state.user.user)
  // const { error, isFetching } = useSelector((state: any) => state.log)
  const logs = useSelector((state: any) => state.log.logs)
  const exercises = useSelector((state: any) => state.exercise.exercises)
  console.log('é esse', exercises)
  // const ids = exercises.map((i) => i._id)
  // const exerciseWithLogs = logs.filter((i) => i.exerciseOwner === id).slice(-1)

  const handleModal = () => {
    setOpenModal(true)
  }

  const handleLiked = () => {
    likedExercisePutCall(dispatch, token, id)
  }

  useEffect(() => {
    logRequestCall(dispatch, id, token)
  }, [])

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
          <ExerciseModal
            name={name}
            execId={id}
            load={''}
            sets={''}
            reps={''}
            rest={''}
            onClick={() => setOpenModal(false)}
          />
        )}
        {logs.map((i) =>
          i.exerciseOwner === exercises._id ? <LogList i={i} /> : ''
        )}
        {/* {logs
          ?.map((i) => id === i.exerciseOwner)
          .slice(-1)
          .map((i) => (
            <>
              <LogList i={i} key={i._id} />
              {openModal && (
                <ExerciseModal
                  name={name}
                  execId={id}
                  load={i.load}
                  sets={i.sets}
                  reps={i.reps}
                  rest={i.rest}
                  onClick={() => setOpenModal(false)}
                />
              )}
            </>
          ))} */}
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
