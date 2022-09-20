import { createSlice } from '@reduxjs/toolkit'

export const allExerciseSlice = createSlice({
  name: 'allExercise',
  initialState: {
    allExercises: [],
    isFetching: false,
    error: false,
    isPosting: false,
    postingError: false,
    postingSuccess: false
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
      console.log(action.payload)
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
      state.isPosting = true
      state.postingError = false
      state.postingSuccess = false
    },
    addExerciseSuccess: (state, action) => {
      state.allExercises.push(action.payload.exercise)
      state.isPosting = false
      state.postingError = false
      state.postingSuccess = true
    },
    addExerciseFailure: (state) => {
      state.isPosting = false
      state.postingError = true
      state.postingSuccess = false
    },
    clearAddExerciseError: (state) => {
      state.postingError = false
    },
    clearAddExerciseSuccess: (state) => {
      state.postingSuccess = false
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
  addExerciseSuccess,
  clearAddExerciseError,
  clearAddExerciseSuccess
} = allExerciseSlice.actions

export const selectExercise = (state) => state.allExercises.allExercises

export default allExerciseSlice.reducer
