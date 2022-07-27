import { configureStore } from '@reduxjs/toolkit'

import building from './building/slice'
import search from './search/slice'

export const store = configureStore({
  reducer: {
    building,
    search
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
