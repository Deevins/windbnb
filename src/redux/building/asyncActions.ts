import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { DATA_URL } from '../../@types/constants'

import { BuildingType } from '../../@types/BuildingType'
import { FetchBuildingsParams } from '../../@types/FetchBuildingsParams'

export const fetchBuildings = createAsyncThunk<BuildingType[], FetchBuildingsParams>(
  'building/fetchBuildingStatus',
  async (params) => {
    const { country, city, peopleCount } = params
    const cityParam = city ? `&&city=${city}` : ''
    const countryParam = country ? `&&country=${country}` : ''
    const peopleCountParam = peopleCount ? `&&maxGuests=${peopleCount}` : ''
    const { data } = await axios.get(`${DATA_URL}?${cityParam}${countryParam}${peopleCountParam}`)
    return data
  }
)
