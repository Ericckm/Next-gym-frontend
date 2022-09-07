import { createSlice } from '@reduxjs/toolkit'

export const allExerciseSlice = createSlice({
  name: 'allExercise',
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
    },
    unlikeExerciseStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    unlikeExerciseSuccess: (state, action) => {
      state.allExercises = state.allExercises.filter(
        (i) => i._id !== action.payload._id
      )
      state.isFetching = false
    },
    unlikeExerciseFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    addExerciseStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    addExerciseSuccess: (state, action) => {
      state.allExercises.push(action.payload.exercise)
      state.isFetching = false
    },
    addExerciseFailure: (state) => {
      state.isFetching = false
      state.error = true
    }
  }
})

export const {
  getAllExerciseStart,
  getAllExerciseSuccess,
  getAllExerciseFailure,
  unlikeExerciseStart,
  unlikeExerciseFailure,
  unlikeExerciseSuccess,
  addExerciseFailure,
  addExerciseStart,
  addExerciseSuccess
} = allExerciseSlice.actions

export const selectExercise = (state) => state.exercise.exercise

export default allExerciseSlice.reducer
