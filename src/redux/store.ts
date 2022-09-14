import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/userSlice'
import exerciseReducer from '../redux/exerciseSlice'
import logReducer from '../redux/logSlice'
import allExerciseReducer from '../redux/allExerciseSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

import storage from './storageWorkaround'
import allLogsReducer from './allLogsSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    exercise: exerciseReducer,
    allExercises: allExerciseReducer,
    log: logReducer,
    allLogs: allLogsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export let persistor = persistStore(store)
