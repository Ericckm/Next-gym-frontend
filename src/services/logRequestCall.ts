import axios from 'axios'
import {
  getAllLogFailure,
  getAllLogStart,
  getAllLogSuccess
} from '../redux/allLogsSlice'
import {
  addLogFailure,
  addLogStart,
  addLogSuccess,
  getLogFailure,
  getLogStart,
  getLogSuccess
} from '../redux/logSlice'

// GET LOG FROM EXERCISE ID
export async function logRequestCall(dispatch, id, token) {
  dispatch(getLogStart())
  try {
    const request = await axios.get(
      `https://gym-app-backend-bd2l.onrender.com/exercise/${id}`,
      {
        headers: {
          Authorization: token
        }
      }
    )
    dispatch(getLogSuccess(request.data))
  } catch (e) {
    dispatch(getLogFailure())
  }
}

// ADD NEW LOG
export async function addLog(dispatch, inputs, token) {
  dispatch(addLogStart())
  try {
    const request = await axios.post(
      `https://gym-app-backend-bd2l.onrender.com/log`,
      inputs,
      {
        headers: {
          Authorization: token
        }
      }
    )
    dispatch(addLogSuccess(request.data))
  } catch (e) {
    dispatch(addLogFailure())
  }
}

// GET ALLLOGS FROM EXERCISE ID
export async function allLogsRequestCall(dispatch, id, token) {
  dispatch(getAllLogStart())
  try {
    const request = await axios.get(
      `https://gym-app-backend-bd2l.onrender.com/exercise/logs/${id}`,
      {
        headers: {
          Authorization: token
        }
      }
    )

    dispatch(getAllLogSuccess(request.data))
  } catch (e) {
    dispatch(getAllLogFailure())
  }
}
