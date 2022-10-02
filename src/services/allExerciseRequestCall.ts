import axios from 'axios'
import {
  addExerciseFailure,
  addExerciseStart,
  addExerciseSuccess,
  getAllExerciseFailure,
  getAllExerciseStart,
  getAllExerciseSuccess,
  unlikeExerciseFailure,
  unlikeExerciseStart,
  unlikeExerciseSuccess
} from '../redux/allExerciseSlice'

export async function allExerciseRequestCall(dispatch, token) {
  dispatch(getAllExerciseStart())
  try {
    const request = await axios.get('http://localhost:2500/exercises', {
      headers: {
        Authorization: token
      }
    })
    dispatch(getAllExerciseSuccess(request.data))
  } catch (e) {
    dispatch(getAllExerciseFailure())
  }
}

export async function unLikeExercisePutCall(dispatch, token, id) {
  dispatch(unlikeExerciseStart())
  try {
    const request = await axios.put(`http://localhost:2500/exercises/${id}`, {
      headers: {
        Authorization: token
      }
    })
    dispatch(unlikeExerciseSuccess(request.data))
  } catch (e) {
    dispatch(unlikeExerciseFailure())
  }
}

export async function addExercise(dispatch, inputs, token) {
  dispatch(addExerciseStart())
  try {
    const request = await axios.post(
      `http://localhost:2500/addExercise`,
      inputs,
      {
        headers: {
          Authorization: token
        }
      }
    )
    dispatch(addExerciseSuccess(request.data))
  } catch (e) {
    dispatch(addExerciseFailure())
  }
}
