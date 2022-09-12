import { createSlice } from '@reduxjs/toolkit'

export const logSlice = createSlice({
  name: 'log',
  initialState: {
    logs: [],
    isFetching: false,
    error: false
  },
  reducers: {
    // GET LOGS
    getLogStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    getLogSuccess: (state, action) => {
      // FIX LOGIC TO VERIFY ACTION.PAYLOAD._ID === STATE.LOGS._ID
      state.logs.push(...action.payload)
      state.isFetching = false
      state.error = false
    },
    getLogFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    // ADD LOGS
    addLogStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    addLogSuccess: (state, action) => {
      state.logs.push(action.payload)
      state.isFetching = false
    },
    addLogFailure: (state) => {
      state.isFetching = false
      state.error = true
    }
  }
})

export const {
  getLogStart,
  getLogSuccess,
  getLogFailure,
  addLogStart,
  addLogSuccess,
  addLogFailure
} = logSlice.actions

export const selectlog = (state) => state.log.log

export default logSlice.reducer
