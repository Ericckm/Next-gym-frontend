import { createSlice } from '@reduxjs/toolkit'

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: {
    exercises: [],
    isFetching: false,
    error: false
  },
  reducers: {
    getExerciseStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    getExerciseSuccess: (state, action) => {
      state.exercises = action.payload
      state.isFetching = false
    },
    getExerciseFailure: (state) => {
      state.isFetching = false
      state.error = true
    }
  }
})

export const { getExerciseStart, getExerciseSuccess, getExerciseFailure } =
  exerciseSlice.actions

export const selectExercise = (state) => state.exercise.exercise

export default exerciseSlice.reducer
