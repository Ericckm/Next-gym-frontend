import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/userSlice'
import exerciseReducer from '../redux/exerciseSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    exercise: exerciseReducer
  }
})
