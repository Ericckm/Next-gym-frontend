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
    },
    likeExerciseStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    likeExerciseSuccess: (state, action) => {
      state.exercises = state.exercises.map((i) =>
        i._id === action.payload._id ? '' : i
      )
      state.isFetching = false
    },
    likeExerciseFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    startExercise: (state, action) => {
      console.log(action.payload)
      state.exercises = state.exercises.map((i) =>
        i._id === action.payload ? '' : i
      )
    }
  }
})

export const {
  getExerciseStart,
  getExerciseSuccess,
  getExerciseFailure,
  likeExerciseFailure,
  likeExerciseStart,
  likeExerciseSuccess,
  startExercise
} = exerciseSlice.actions

export const selectExercise = (state) => state.exercise.exercise

export default exerciseSlice.reducer
