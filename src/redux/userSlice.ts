import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isFetching: false,
    error: false,
    loggedIn: false
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true
      state.error = false
      state.loggedIn = false
    },
    loginSuccess: (state, action) => {
      state.isFetching = false
      state.user = action.payload
      state.error = false
      state.loggedIn = true
    },
    loginFailure: (state) => {
      state.isFetching = false
      state.loggedIn = false
      state.error = true
    },
    logout: (state) => {
      state.user = null
      state.loggedIn = false
      state.error = false
      state.isFetching = false
    },
    registerStart: (state) => {
      state.isFetching = true
      state.error = false
      state.loggedIn = false
    },
    registerSuccess: (state, action) => {
      state.isFetching = false
      state.user = action.payload
      state.error = false
      state.loggedIn = true
    },
    registerFailure: (state) => {
      state.isFetching = false
      state.loggedIn = false
      state.error = true
    },
    userUpdateStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    userUpdateSuccess: (state, action) => {
      state.isFetching = false
      // check if works
      state.user = [...(state.user + action.payload)]
      state.error = false
    },
    userUpdateFailure: (state) => {
      state.isFetching = false
      state.error = true
    }
  }
})

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerStart,
  registerFailure,
  registerSuccess,
  userUpdateFailure,
  userUpdateStart,
  userUpdateSuccess
} = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer
