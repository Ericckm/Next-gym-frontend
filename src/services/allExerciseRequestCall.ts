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

// export type exerciseRequestCallType = {
// createdAt: Date
// liked: boolean
// name: string
// owner: number
// type: string
// updatedAt: Date
// id: number
// }
// : Promise<exerciseRequestCallType>

export async function allExerciseRequestCall(dispatch, token) {
  console.log(token)
  dispatch(getAllExerciseStart())
  try {
    const request = await axios.get('http://localhost:2500/exercises', {
      headers: {
        Authorization: token
      }
    })
    console.log(request.data)
    dispatch(getAllExerciseSuccess(request.data))
  } catch (e) {
    dispatch(getAllExerciseFailure())
  }
}

export async function unLikeExercisePutCall(dispatch, token, id) {
  dispatch(unlikeExerciseStart())
  try {
    const request = await axios.put(`http://localhost:2500/exercise/${id}`, {
      headers: {
        Authorization: token
      }
    })
    console.log(request.data)
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
    console.log(request.data)
    dispatch(addExerciseSuccess(request.data))
  } catch (e) {
    dispatch(addExerciseFailure())
  }
}
