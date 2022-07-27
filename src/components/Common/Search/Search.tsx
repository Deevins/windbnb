import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiSearchAlt2 } from 'react-icons/bi'

import styles from './Search.module.scss'

import { selectSearch } from 'redux/search/selectors'
import { SearchContext } from '../../../App'
const Search: React.FC = () => {
  const { locationProperty, guestsProperty } = useSelector(selectSearch)
  // @ts-ignore
  const { isOpen, setIsOpen } = useContext(SearchContext)

  return (
    <div className={styles.root}>
      <div className={styles.locationBlock}>
        <span className={styles.locationInnerBlock}>
          {locationProperty ? locationProperty : 'Anywhere'}
        </span>
      </div>
      <div className={styles.guestsBlock}>
        <span className={styles.guestsInnerBlock}>
          {guestsProperty.adultCount + guestsProperty.childrenCount > 0
            ? `${
                guestsProperty.adultCount + guestsProperty.childrenCount
              } people`
            : 'Add guests'}
        </span>
      </div>
      <div className={styles.searchBlock}>
        <BiSearchAlt2 className={styles.searchIcon} />
      </div>
    </div>
  )
}

export default Search
