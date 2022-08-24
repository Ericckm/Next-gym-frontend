import { createSlice } from '@reduxjs/toolkit'

export const logSlice = createSlice({
  name: 'log',
  initialState: {
    logs: [],
    isFetching: false,
    error: false
  },
  reducers: {
    getLogStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    getLogSuccess: (state, action) => {
      state.logs = action.payload
      state.isFetching = false
    },
    getLogFailure: (state) => {
      state.isFetching = false
      state.error = true
    }
  }
})

export const { getLogStart, getLogSuccess, getLogFailure } = logSlice.actions

export const selectlog = (state) => state.log.log

export default logSlice.reducer
