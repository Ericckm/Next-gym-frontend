import axios from 'axios'
import { useEffect } from 'react'
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  userUpdateFailure,
  userUpdateStart,
  userUpdateSuccess
} from '../redux/userSlice'

export async function login(dispatch, email, password) {
  dispatch(loginStart())
  try {
    const request = await axios.post(
      'https://gym-app-mu.vercel.app/exercises/login',
      {
        email,
        password
      }
    )
    dispatch(loginSuccess(request.data))
  } catch (e) {
    dispatch(loginFailure())
  }
}

export async function register(dispatch, inputs) {
  dispatch(registerStart())
  try {
    const request = await axios.post(
      'https://gym-app-mu.vercel.app/exercises/register',
      {
        ...inputs
      }
    )
    dispatch(registerSuccess(request.data))
  } catch (e) {
    dispatch(registerFailure())
  }
}

export async function updateUser(dispatch, inputs, token) {
  dispatch(userUpdateStart())
  try {
    const request = await axios.patch(
      'https://gym-app-mu.vercel.app/userUpdate',
      inputs,
      {
        headers: {
          Authorization: token
        }
      }
    )
    dispatch(userUpdateSuccess(request.data))
  } catch (e) {
    dispatch(userUpdateFailure())
  }
}
