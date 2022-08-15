import axios from 'axios'

type handleLoginApiCallTypes = {
  status: number
  data: any
}

export async function handleLoginApiCall(
  email,
  password
): Promise<handleLoginApiCallTypes> {
  try {
    const request = await axios.post('http://localhost:2500/login', {
      email,
      password
    })

    const token = request.data.token
    sessionStorage.setItem('token', token)
    return {
      status: request.data.status,
      data: request.data
    }
  } catch (e) {
    return {
      status: 500,
      data: {}
    }
  }
}
