import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchStatusEnum } from '../../@types/enums/FetchStatusEnum'
import { IBuildingSliceState } from './types'
import { BuildingType } from '../../@types/BuildingType'
import { fetchBuildings } from './asyncActions'

const initialState: IBuildingSliceState = {
  items: [],
  status: FetchStatusEnum.PENDING
}

export const slice = createSlice({
  name: 'building',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<BuildingType[]>) {
      state.items = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBuildings.pending, (state) => {
      console.log('Request sending...')
      state.status = FetchStatusEnum.PENDING
      state.items = []
    })
    builder.addCase(
      fetchBuildings.fulfilled,
      (state, action: PayloadAction<BuildingType[]>) => {
        console.log('Request completed...')
        state.items = action.payload
        console.log(action.payload)
        state.status = FetchStatusEnum.SUCCESS
      }
    )
    builder.addCase(fetchBuildings.rejected, (state) => {
      console.log('Request rejected...')
      state.items = []
      state.status = FetchStatusEnum.REJECTED
    })
  }
})

export const { setItems } = slice.actions

export default slice.reducer
