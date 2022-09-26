import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAddLogError, clearAddLogSuccess } from '../../../redux/logSlice'
import { addLog } from '../../../services/logRequestCall'
import { FormError } from '../../atoms/formError'
import {
  Bottom,
  Button,
  ButtonContainer,
  Container,
  Form,
  FormContainer,
  Overlay,
  Title,
  Top
} from './styles'

export const AddLogModal = ({
  onClick,
  name,
  load,
  sets,
  reps,
  rest,
  execId
}) => {
  const [inputs, setInputs] = useState({
    exerciseOwner: execId,
    load: load,
    rest: rest,
    reps: reps,
    sets: sets
  })
  const dispatch = useDispatch()
  const { token } = useSelector((state: any) => state.user.user)
  const { isPosting, postingError, postingSuccess } = useSelector(
    (state: any) => state.log
  )

  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
        exerciseOwner: execId
      }
    })
    if (postingError) dispatch(clearAddLogError())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addLog(dispatch, inputs, token)
  }

  useEffect(() => {
    if (postingSuccess) onClick(!onClick)
    dispatch(clearAddLogSuccess())
  }, [handleSubmit])

  return (
    <Overlay>
      <Container>
        <Top>
          <Title>
            <p>Fill the information below to create a new log</p>
          </Title>
          <Button>
            <button onClick={onClick}>x</button>
          </Button>
        </Top>

        <FormContainer>
          <Form>
            <p>{name}</p>
            <form>
              <div>
                <label>Load</label>
                <input
                  type="number"
                  placeholder={load}
                  name="load"
                  onChange={handleChange}
                />
                <label>kg</label>
              </div>
              <div>
                <label>Sets</label>
                <input
                  type="number"
                  placeholder={sets}
                  name="sets"
                  onChange={handleChange}
                />
                <label>x</label>
              </div>
              <div>
                <label>Repetitions</label>
                <input
                  type="number"
                  placeholder={reps}
                  name="reps"
                  onChange={handleChange}
                />
                <label>x</label>
              </div>
              <div>
                <label>Rest</label>
                <input
                  type="number"
                  placeholder={rest}
                  name="rest"
                  onChange={handleChange}
                />
                <label>seconds</label>
              </div>
              {postingError && <FormError />}
            </form>
          </Form>
        </FormContainer>

        <Bottom>
          <ButtonContainer>
            <button onClick={handleSubmit} disabled={isPosting || postingError}>
              submit
            </button>
          </ButtonContainer>
        </Bottom>
      </Container>
    </Overlay>
  )
}
