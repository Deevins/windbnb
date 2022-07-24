import { configureStore } from '@reduxjs/toolkit'

import building from './object/slice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    building
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
