export interface ISearchSliceState {
  locationProperty: string
  guestsProperty: {
    adultCount: number
    childrenCount: number
  }
}

export type guestsType = {
  adultCount: number
  childrenCount: number
}

export type locationAndGuestsType = {
  locationProperty: string
  guestsProperty: guestsType
}
