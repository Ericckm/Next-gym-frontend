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
      'https://gym-app-backend-bd2l.onrender.com/exerciseWithLogs',
      {
        headers: {
          Authorization: token
        }
      }
    )
    console.log(request.data)
    dispatch(getExercisesWithLogsSuccess(request.data))
  } catch (e) {
    dispatch(getExercisesWithLogsFailure())
  }
}
