import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/userSlice'
import exerciseReducer from '../redux/exerciseSlice'
import logReducer from '../redux/logSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    exercise: exerciseReducer,
    log: logReducer
  }
})
