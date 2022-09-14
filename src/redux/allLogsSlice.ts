import { createSlice } from '@reduxjs/toolkit'

export const allLogsSlice = createSlice({
  name: 'allLogs',
  initialState: {
    allLogs: [],
    isFetching: false,
    error: false
  },
  reducers: {
    // GET LOGS
    getAllLogStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    getAllLogSuccess: (state, action) => {
      state.allLogs = action.payload
      state.isFetching = false
      state.error = false
    },
    getAllLogFailure: (state) => {
      state.isFetching = false
      state.error = true
    }
  }
})

export const { getAllLogStart, getAllLogSuccess, getAllLogFailure } =
  allLogsSlice.actions

export const selectAllLogs = (state) => state.allLogs.allLog

export default allLogsSlice.reducer
