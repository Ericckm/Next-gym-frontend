import axios from 'axios'

type handleLogRequestCall = {
  status: number
  data: any
}

export async function handleLogRequestCall(id): Promise<handleLogRequestCall> {
  const token = await sessionStorage.getItem('token')
  try {
    const request = await axios.get(`http://localhost:2500/exercise/${id}`, {
      headers: {
        Authorization: token
      }
    })

    return {
      status: request.status,
      data: request.data
    }
  } catch (e) {
    return {
      status: 500,
      data: {}
    }
  }
}
