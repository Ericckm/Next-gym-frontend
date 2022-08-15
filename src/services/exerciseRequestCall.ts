import axios from 'axios'

type handleExerciseRequestCall = {
  status: number
  data: any
}

export async function handleExerciseRequestCall(): Promise<handleExerciseRequestCall> {
  const token = await sessionStorage.getItem('token')
  try {
    const request = await axios.get('http://localhost:2500/exercise', {
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
