import axios from 'axios'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'

export async function login(dispatch, email, password) {
  dispatch(loginStart())
  try {
    const request = await axios.post('http://localhost:2500/login', {
      email,
      password
    })
    dispatch(loginSuccess(request.data))
    const token = request.data.token
    sessionStorage.setItem('token', token)
  } catch (e) {
    dispatch(loginFailure())
  }
}

// type handleLoginApiCallTypes = {
//   status: number
//   data: any
// }

// export async function handleLoginApiCall(
//   email,
//   password
// ): Promise<handleLoginApiCallTypes> {
//   try {
//     const request = await axios.post('http://localhost:2500/login', {
//       email,
//       password
//     })

//     const token = request.data.token
//     sessionStorage.setItem('token', token)
//     return {
//       status: request.data.status,
//       data: request.data
//     }
//   } catch (e) {
//     return {
//       status: 500,
//       data: {}
//     }
//   }
// }
