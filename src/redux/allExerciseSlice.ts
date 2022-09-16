import { createSlice } from '@reduxjs/toolkit'

export const allExerciseSlice = createSlice({
  name: 'allExercise',
  initialState: {
    allExercises: [],
    isFetching: false,
    error: false,
    isAdding: false,
    addingError: false,
    addSuccess: false
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
      state.isAdding = true
      state.addingError = false
      state.addSuccess = false
    },
    addExerciseSuccess: (state, action) => {
      state.allExercises.push(action.payload.exercise)
      state.isAdding = false
      state.addingError = false
      state.addSuccess = true
    },
    addExerciseFailure: (state) => {
      state.isAdding = false
      state.addSuccess = false
      state.addingError = true
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

export const selectExercise = (state) => state.allExercises.allExercises

export default allExerciseSlice.reducer
