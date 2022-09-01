import axios from 'axios'
import {
  getExerciseFailure,
  getExerciseStart,
  getExerciseSuccess
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
