import axios from 'axios'
import {
  getExerciseFailure,
  getExerciseStart,
  getExerciseSuccess,
  likeExerciseFailure,
  likeExerciseStart,
  likeExerciseSuccess
} from '../redux/exerciseSlice'

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

export async function exerciseRequestCall(dispatch, token) {
  dispatch(getExerciseStart())
  try {
    const request = await axios.get('http://localhost:2500/exerciseLiked', {
      headers: {
        Authorization: token
      }
    })
    console.log(request.data)
    dispatch(getExerciseSuccess(request.data))
  } catch (e) {
    dispatch(getExerciseFailure())
  }
}

export async function likedExercisePutCall(dispatch, token, id) {
  dispatch(likeExerciseStart())
  try {
    const request = await axios.put(`http://localhost:2500/exercise/${id}`, {
      headers: {
        Authorization: token
      }
    })
    dispatch(likeExerciseSuccess(request.data))
  } catch (e) {
    dispatch(likeExerciseFailure())
  }
}
