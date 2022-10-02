import { createSlice } from '@reduxjs/toolkit'

export const exercisesWithLogsSlice = createSlice({
  name: 'exercisesWithLog',
  initialState: {
    exercisesWithLogs: [],
    isFetching: false,
    error: false
  },
  reducers: {
    getExercisesWithLogsStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    getExercisesWithLogsSuccess: (state, action) => {
      state.exercisesWithLogs = action.payload
      state.isFetching = false
    },
    getExercisesWithLogsFailure: (state) => {
      state.isFetching = false
      state.error = true
    }
  }
})

export const {
  getExercisesWithLogsStart,
  getExercisesWithLogsSuccess,
  getExercisesWithLogsFailure
} = exercisesWithLogsSlice.actions

export const selectExercisesWithLogs = (state) =>
  state.exercisesWithLogs.exercises

export default exercisesWithLogsSlice.reducer
