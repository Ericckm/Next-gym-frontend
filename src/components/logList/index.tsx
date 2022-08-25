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
      <ButtonContainer>
        <button>Remove exec</button>
        <button onClick={handleModal}>update log</button>
      </ButtonContainer>
    </ExerciseContainer>
  )
}

// {
//   logs &&
//     logs
//       .filter((i) => i.exerciseOwner === id)
//       .map((i) => (
//         <ExerciseContainer>
//           <ExerciseDesc key={i._id}>
//             <p>
//               {name}
//               <a href={videoUrl} target="_blank">
//                 Vídeo
//               </a>
//             </p>
//             <span>Load - {i.load} kg</span>
//             <span>Sets - {i.sets} x</span>
//             <span>Reps - {i.reps} times</span>
//             <span>Rest - {i.rest} seconds</span>
//             {openModal && (
//               <ExerciseModal
//                 name={name}
//                 load={i.load}
//                 sets={i.sets}
//                 reps={i.reps}
//                 rest={i.rest}
//                 onClick={() => setOpenModal(false)}
//               />
//             )}
//           </ExerciseDesc>
//           <ButtonContainer>
//             <button>Remove exec</button>
//             <button onClick={handleModal}>update log</button>
//           </ButtonContainer>
//         </ExerciseContainer>
//       ))
// }
