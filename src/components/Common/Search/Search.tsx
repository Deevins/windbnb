import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import { BiSearchAlt2 } from 'react-icons/bi'

import styles from './Search.module.scss'

import { selectSearch } from 'redux/search/selectors'
import { setCurrentProperty } from 'redux/search/slice'
import { fetchBuildings } from 'redux/building/asyncActions'
import { AppDispatch } from 'redux/store'

import { SearchContext } from 'App'
import { getFetchParams } from 'utils/GetFetchParams'

import { SearchPropertyEnum } from '../../../@types/enums/SearchPropertyEnum'

const Search: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { locationProperty, childrenCount, adultCount } = useSelector(selectSearch)

  const { setIsOpen } = React.useContext(SearchContext)

  const onClickLocation = () => {
    setIsOpen(true)
    dispatch(setCurrentProperty(SearchPropertyEnum.LOCATION))
  }
  const onClickGuests = () => {
    setIsOpen(true)
    dispatch(setCurrentProperty(SearchPropertyEnum.GUESTS))
  }

  const onClickSearch = async () => {
    const { city, country, peopleCount } = getFetchParams({
      locationProperty,
      adultCount,
      childrenCount
    })
    await dispatch(
      fetchBuildings({
        city,
        country,
        peopleCount
      })
    )
  }

  return (
    <div className={styles.root}>
      <div className={styles.locationBlock} onClick={onClickLocation}>
        <span
          className={clsx(styles.locationInnerBlock, {
            [styles.inactive]: locationProperty === 'Add location'
          })}
        >
          {locationProperty}
        </span>
      </div>
      <div className={styles.guestsBlock} onClick={onClickGuests}>
        <span
          className={clsx(styles.guestsInnerBlock, {
            [styles.inactive]: adultCount + childrenCount === 0
          })}
        >
          {adultCount + childrenCount > 0 ? `${adultCount + childrenCount} people` : 'Add guests'}
        </span>
      </div>
      <div className={styles.searchBlock} onClick={onClickSearch}>
        <BiSearchAlt2 className={styles.searchIcon} />
      </div>
    </div>
  )
}

export default Search
