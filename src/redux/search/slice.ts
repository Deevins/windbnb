import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { guestsType, ISearchSliceState, locationAndGuestsType } from './types'

const initialState: ISearchSliceState = {
  locationProperty: 'Helsinki, Finland',
  guestsProperty: {
    adultCount: 0,
    childrenCount: 0
  }
}

export const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.locationProperty = action.payload
    },
    setGuests: (state, action: PayloadAction<guestsType>) => {
      state.guestsProperty = action.payload
    },
    setLocationAndGuests: (
      state,
      action: PayloadAction<locationAndGuestsType>
    ) => {
      state.guestsProperty = action.payload.guestsProperty
      state.locationProperty = action.payload.locationProperty
    }
  }
})

export const { setLocation, setGuests, setLocationAndGuests } = slice.actions

export default slice.reducer
