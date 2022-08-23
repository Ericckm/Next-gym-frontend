import axios from 'axios'
import {
  getExerciseFailure,
  getExerciseStart,
  getExerciseSuccess
} from '../redux/exerciseSlice'

export async function handleExerciseRequestCall(dispatch) {
  const token = await sessionStorage.getItem('token')
  dispatch(getExerciseStart())
  try {
    const request = await axios.get('http://localhost:2500/exercise', {
      headers: {
        Authorization: token
      }
    })
    dispatch(getExerciseSuccess(request.data))
  } catch (e) {
    dispatch(getExerciseFailure)
  }
}
