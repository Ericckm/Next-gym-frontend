import axios from 'axios'
import { getLogFailure, getLogStart, getLogSuccess } from '../redux/logSlice'

export async function logRequestCall(dispatch, token, id) {
  dispatch(getLogStart())
  try {
    const request = await axios.get(`http://localhost:2500/exercise/${id}`, {
      headers: {
        Authorization: token
      }
    })
    dispatch(getLogSuccess(request.data.log))
  } catch (e) {
    console.log(e)
    dispatch(getLogFailure())
  }
}
