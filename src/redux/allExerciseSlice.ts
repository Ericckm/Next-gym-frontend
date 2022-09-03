import { createSlice } from '@reduxjs/toolkit'

export const allExerciseSlice = createSlice({
  name: 'exercise',
  initialState: {
    allExercises: [],
    isFetching: false,
    error: false
  },
  reducers: {
    getAllExerciseStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    getAllExerciseSuccess: (state, action) => {
      state.allExercises = action.payload
      state.isFetching = false
    },
    getAllExerciseFailure: (state) => {
      state.isFetching = false
      state.error = true
    }
  }
})

export const {
  getAllExerciseStart,
  getAllExerciseSuccess,
  getAllExerciseFailure
} = allExerciseSlice.actions

export const selectExercise = (state) => state.exercise.exercise

export default allExerciseSlice.reducer
