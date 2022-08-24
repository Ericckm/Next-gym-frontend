import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { exerciseRequestCall } from '../../services/exerciseRequestCall'
import { ExerciseList } from '../exerciseList'
import { Container, MainContent, Title } from './styles'

export const TrainingSection = () => {
  // const [data, setData] = useState([])
  // const [error, setError] = useState(false)
  // const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const { exercises, error, isFetching } = useSelector(
    (state: any) => state.exercise
  )

  // useEffect(() => {
  //   async function getData() {
  //     const responseApi = await handleExerciseRequestCall()
  //     console.log(responseApi)
  //     if (responseApi.status !== 500) {
  //       setData(responseApi.data)
  //       setLoading(false)
  //       setError(false)
  //     } else {
  //       setError(true)
  //     }
  //   }
  //   getData()
  // }, [])

  useEffect(() => {
    exerciseRequestCall(dispatch)
  }, [])

  return (
    <>
      <Container>
        <Title>
          <h2>
            Welcome to our app ' erick ', We've divided your training into three
            parts
          </h2>
          <p>Train ' A '</p>
          <span>
            this training works the ' chest ' and ' triceps ' musculature
          </span>
        </Title>
        <MainContent>
          <ul>
            <li>
              {exercises?.map((i) => (
                <ExerciseList
                  key={i._id}
                  name={i.name}
                  videoUrl={i.videoUrl}
                  type={i.type}
                  liked={i.liked}
                  id={i._id}
                />
              ))}
            </li>
          </ul>
        </MainContent>
      </Container>
    </>
  )
}
