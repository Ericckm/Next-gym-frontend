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
      const found = state.logs.find((i) => {
        return i._id === action.payload._id
      })
      if (!found) {
        state.logs.push(action.payload)
      }

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
      const logIndex = state.logs.findIndex((i) => {
        return i.exerciseOwner === action.payload.exerciseOwner
      })
      if (logIndex === -1) {
        state.logs.push(action.payload)
      }
      state.logs.splice(logIndex, 1, action.payload)
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
