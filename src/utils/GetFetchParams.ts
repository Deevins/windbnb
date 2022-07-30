type GetFetchParams = {
  locationProperty: string
  adultCount: number
  childrenCount: number
}

export const getFetchParams = ({ locationProperty, adultCount, childrenCount }: GetFetchParams) => {
  const location = locationProperty !== 'Add location' ? locationProperty : ''
  const city = location.split(', ')[0]
  const country = location.split(', ')[1] !== undefined ? location.split(', ')[1] : ''
  const peopleCount = adultCount + childrenCount
  return { city, country, peopleCount }
}
