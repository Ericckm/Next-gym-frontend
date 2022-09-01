import axios from 'axios'
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess
} from '../redux/userSlice'

export async function login(dispatch, email, password) {
  dispatch(loginStart())
  try {
    const request = await axios.post('http://localhost:2500/login', {
      email,
      password
    })
    dispatch(loginSuccess(request.data))
  } catch (e) {
    dispatch(loginFailure())
  }
}

export async function register(dispatch, inputs) {
  dispatch(registerStart())
  try {
    const request = await axios.post('http://localhost:2500/register', {
      ...inputs
    })
    dispatch(registerSuccess(request.data))
  } catch (e) {
    dispatch(registerFailure())
  }
}
