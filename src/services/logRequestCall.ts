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
export async function logRequestCall(dispatch, id) {
  const token = await sessionStorage.getItem('token')
  dispatch(getLogStart())
  try {
    const request = await axios.get(`http://localhost:2500/exercise/${id}`, {
      headers: {
        Authorization: token
      }
    })
    console.log(request.data)
    dispatch(getLogSuccess(request.data))
  } catch (e) {
    console.log(e)
    dispatch(getLogFailure())
  }
}

// ADD NEW LOG
export async function addLog(dispatch, log) {
  console.log(log)
  const token = await sessionStorage.getItem('token')
  dispatch(addLogStart())
  try {
    const request = await axios.post(`http://localhost:2500/log`, log, {
      headers: {
        Authorization: token
      }
    })
    dispatch(addLogSuccess(request.data))
  } catch (e) {
    console.log(e)
    dispatch(addLogFailure())
  }
}
