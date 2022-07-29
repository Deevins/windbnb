import { SearchPropertyEnum } from '../../@types/enums/SearchPropertyEnum'

export interface ISearchSliceState {
  locationProperty: string
  adultCount: number
  childrenCount: number
  currentProperty: SearchPropertyEnum
}

export type guestsType = {
  adultCount: number
  childrenCount: number
}

export type locationAndGuestsType = {
  locationProperty: string
  guestsProperty: guestsType
}
