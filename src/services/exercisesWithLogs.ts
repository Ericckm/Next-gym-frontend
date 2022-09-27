import axios from 'axios'
import {
  getExercisesWithLogsFailure,
  getExercisesWithLogsStart,
  getExercisesWithLogsSuccess
} from '../redux/exercisesWithLogs'

export async function exerciseWithLogRequestCall(dispatch, token) {
  dispatch(getExercisesWithLogsStart())
  try {
    const request = await axios.get(
      'https://gym-app-back-production.up.railway.app/exerciseWithLogs',
      {
        headers: {
          Authorization: token
        }
      }
    )

    dispatch(getExercisesWithLogsSuccess(request.data))
  } catch (e) {
    dispatch(getExercisesWithLogsFailure())
  }
}
