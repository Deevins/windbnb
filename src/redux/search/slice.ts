import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ISearchSliceState } from './types'
import { SearchPropertyEnum } from '../../@types/enums/SearchPropertyEnum'

const initialState: ISearchSliceState = {
  locationProperty: 'Helsinki, Finland',
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
    }
  }
})

export const { setLocation, setCurrentProperty } = slice.actions

export default slice.reducer
