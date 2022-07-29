import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiSearchAlt2 } from 'react-icons/bi'

import styles from './Search.module.scss'

import { selectSearch } from 'redux/search/selectors'
import { SearchPropertyEnum } from '../../../@types/enums/SearchPropertyEnum'
import { setCurrentProperty } from '../../../redux/search/slice'
import { AppDispatch } from '../../../redux/store'

const Search: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { locationProperty, childrenCount, adultCount } =
    useSelector(selectSearch)
  // @ts-ignore
  // const { isOpen, setIsOpen } = useContext(SearchContext)

  return (
    <div className={styles.root}>
      <div
        className={styles.locationBlock}
        onClick={() =>
          dispatch(setCurrentProperty(SearchPropertyEnum.LOCATION))
        }
      >
        <span className={styles.locationInnerBlock}>
          {locationProperty ? locationProperty : 'Anywhere'}
        </span>
      </div>
      <div
        className={styles.guestsBlock}
        onClick={() => dispatch(setCurrentProperty(SearchPropertyEnum.GUESTS))}
      >
        <span className={styles.guestsInnerBlock}>
          {adultCount + childrenCount > 0
            ? `${adultCount + childrenCount} people`
            : 'Add guests'}
        </span>
      </div>
      <div className={styles.searchBlock}>
        <BiSearchAlt2
          className={styles.searchIcon}
          onClick={() =>
            dispatch(setCurrentProperty(SearchPropertyEnum.LOCATION))
          }
        />
      </div>
    </div>
  )
}

export default Search
