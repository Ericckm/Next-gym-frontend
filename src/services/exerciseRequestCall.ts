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
    const request = await axios.get(
      'https://gym-app-back-production.up.railway.app/exerciseLiked',
      {
        headers: {
          Authorization: token
        }
      }
    )
    dispatch(getExerciseSuccess(request.data))
  } catch (e) {
    dispatch(getExerciseFailure())
  }
}

export async function likedExercisePutCall(dispatch, token, id) {
  dispatch(likeExerciseStart())
  try {
    const request = await axios.put(
      `https://gym-app-back-production.up.railway.app/exercise/${id}`,
      {
        headers: {
          Authorization: token
        }
      }
    )
    dispatch(likeExerciseSuccess(request.data))
  } catch (e) {
    dispatch(likeExerciseFailure())
  }
}
