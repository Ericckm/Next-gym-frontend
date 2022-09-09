import axios from 'axios'
import {
  addLogFailure,
  addLogStart,
  addLogSuccess,
  getLogFailure,
  getLogStart,
  getLogSuccess
} from '../redux/logSlice'

// GET LOGS
export async function logRequestCall(dispatch, id, token) {
  dispatch(getLogStart())
  try {
    const request = await axios.get(`http://localhost:2500/exercise/${id}`, {
      headers: {
        Authorization: token
      }
    })
    dispatch(getLogSuccess(request.data))
  } catch (e) {
    dispatch(getLogFailure())
  }
}

// ADD NEW LOG
export async function addLog(dispatch, inputs, token) {
  dispatch(addLogStart())
  try {
    const request = await axios.post(`http://localhost:2500/log`, inputs, {
      headers: {
        Authorization: token
      }
    })
    dispatch(addLogSuccess(request.data))
  } catch (e) {
    dispatch(addLogFailure())
  }
}
