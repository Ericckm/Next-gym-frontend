import axios from 'axios'
import {
  getExercisesWithLogsFailure,
  getExercisesWithLogsStart,
  getExercisesWithLogsSuccess
} from '../redux/exercisesWithLogs'

export async function exerciseWithLogRequestCall(dispatch, token) {
  dispatch(getExercisesWithLogsStart())
  try {
    const request = await axios.get('http://localhost:2500/exerciseWithLogs', {
      headers: {
        Authorization: token
      }
    })
    console.log(request)
    dispatch(getExercisesWithLogsSuccess(request.data))
  } catch (e) {
    dispatch(getExercisesWithLogsFailure())
  }
}
