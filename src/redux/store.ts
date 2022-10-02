import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/userSlice'
import exerciseReducer from '../redux/exerciseSlice'
import logReducer from '../redux/logSlice'
import allExerciseReducer from '../redux/allExerciseSlice'
import allLogsReducer from './allLogsSlice'
import exercisesWithLogsReducer from './exercisesWithLogs'

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
    allLogs: allLogsReducer,
    exercisesWithLogs: exercisesWithLogsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export let persistor = persistStore(store)
