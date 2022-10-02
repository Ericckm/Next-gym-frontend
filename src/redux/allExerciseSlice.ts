import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Exercise = {
  _id: string
  name: string
  videoUrl: string
  type: string
  liked: boolean
  owner: string
  createdAt: string
  updatedAt: string
}

type initalState = {
  allExercises: Exercise[]
  isFetching: boolean
  error: boolean
  isPosting: boolean
  postingError: boolean
  postingSuccess: boolean
}

const initialState: initalState = {
  allExercises: [],
  isFetching: false,
  error: false,
  isPosting: false,
  postingError: false,
  postingSuccess: false
}

export const allExercisesSlice = createSlice({
  name: 'allExercises',
  initialState,
  reducers: {
    getAllExerciseStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    getAllExerciseSuccess: (
      state: initalState,
      action: PayloadAction<Exercise[]>
    ) => {
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
} = allExercisesSlice.actions

export const selectAllExercises = (state) => state.allExercises.allExercises

export default allExercisesSlice.reducer
