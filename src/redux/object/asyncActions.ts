import { createAsyncThunk } from '@reduxjs/toolkit'
import { BuildingType } from '../../@types/BuildingType'
import { DATA_URL } from '../../@types/constants'
import axios from 'axios'

export const fetchBuildings = createAsyncThunk<BuildingType[]>(
  'building/fetchBuildingStatus',
  async () => {
    const { data } = await axios.get(DATA_URL)
    return data
  }
)
