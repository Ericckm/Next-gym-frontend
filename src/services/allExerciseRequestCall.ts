import axios from 'axios'
import {
  getAllExerciseFailure,
  getAllExerciseStart,
  getAllExerciseSuccess
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
