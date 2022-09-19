import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearAddExerciseError,
  clearAddExerciseSuccess
} from '../../redux/allExerciseSlice'
import { addExercise } from '../../services/allExerciseRequestCall'
import { FormError } from '../formError'

import {
  Bottom,
  Button,
  ButtonContainer,
  Container,
  Form,
  Main,
  Overlay,
  Title,
  Top
} from './styles'

export const AddExerciseModal = ({ onClick }) => {
  const [inputs, setInputs] = useState({})
  const dispatch = useDispatch()
  const { token } = useSelector((state: any) => state.user.user)
  const { isPosting, postingError, postingSuccess } = useSelector(
    (state: any) => state.allExercises
  )

  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
    if (postingError) dispatch(clearAddExerciseError())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addExercise(dispatch, inputs, token)
  }

  useEffect(() => {
    if (postingSuccess) onClick(!onClick)
    dispatch(clearAddExerciseSuccess())
  }, [handleSubmit])

  return (
    <Overlay>
      <Container>
        <Top>
          <Title>
            <p>Fill the information below to create a new Exercise</p>
          </Title>
          <Button>
            <button onClick={onClick}>x</button>
          </Button>
        </Top>
        <Main>
          <Form>
            <form>
              <div>
                <label>Name</label>
                <input
                  type="string"
                  placeholder="exercise name"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Video link</label>
                <input
                  type="string"
                  placeholder="video"
                  name="videoUrl"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Type</label>
                <select name="type" onChange={handleChange}>
                  <option defaultChecked>must select</option>
                  <option value="Chest">chest</option>
                  <option value="Triceps">triceps</option>
                  <option value="Back">back</option>
                  <option value="Biceps">biceps</option>
                  <option value="Leg">leg</option>
                  <option value="Shoulder">shoulder</option>
                </select>
              </div>
              {postingError && <FormError />}
            </form>
          </Form>
        </Main>
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
