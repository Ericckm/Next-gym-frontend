import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLog } from '../../services/logRequestCall'
import {
  Bottom,
  Button,
  ButtonContainer,
  Container,
  Form,
  FormContainer,
  Main,
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

  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
        exerciseOwner: execId
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addLog(dispatch, inputs, token)
  }

  return (
    <Overlay>
      <Container>
        <Top>
          <Title>
            <h2>Fill the information below to create a new log</h2>
          </Title>
          <Button>
            <button onClick={onClick}>x</button>
          </Button>
        </Top>
        <Main>
          <FormContainer>
            <h2>{name}</h2>
            <Form>
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
              </form>
            </Form>
          </FormContainer>
        </Main>
        <Bottom>
          <ButtonContainer>
            <button onClick={handleSubmit && onClick}>submit</button>
          </ButtonContainer>
        </Bottom>
      </Container>
    </Overlay>
  )
}
