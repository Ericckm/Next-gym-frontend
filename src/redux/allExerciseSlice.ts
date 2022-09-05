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
    }
  }
})

export const {
  getAllExerciseStart,
  getAllExerciseSuccess,
  getAllExerciseFailure,
  unlikeExerciseStart,
  unlikeExerciseFailure,
  unlikeExerciseSuccess
} = allExerciseSlice.actions

export const selectExercise = (state) => state.exercise.exercise

export default allExerciseSlice.reducer
