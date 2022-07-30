import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ISearchSliceState } from './types'
import { SearchPropertyEnum } from '../../@types/enums/SearchPropertyEnum'

const initialState: ISearchSliceState = {
  locationProperty: 'Add location',
  adultCount: 0,
  childrenCount: 0,
  currentProperty: SearchPropertyEnum.LOCATION
}

export const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.locationProperty = action.payload
    },
    setCurrentProperty: (state, action: PayloadAction<SearchPropertyEnum>) => {
      state.currentProperty = action.payload
    },
    increment: (state, action: PayloadAction<string>) => {
      if (action.payload === 'adult') state.adultCount += 1
      if (action.payload === 'children') state.childrenCount += 1
    },
    decrement: (state, action: PayloadAction<string>) => {
      if (action.payload === 'adult' && state.adultCount > 0) state.adultCount -= 1
      if (action.payload === 'children' && state.childrenCount > 0) state.childrenCount -= 1
    }
  }
})

export const { setLocation, setCurrentProperty, increment, decrement } = slice.actions

export default slice.reducer
