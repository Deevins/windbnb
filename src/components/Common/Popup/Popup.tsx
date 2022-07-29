import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiSearchAlt2 } from 'react-icons/bi'

import styles from './Popup.module.scss'

import { selectSearch } from 'redux/search/selectors'
import { SearchContext } from 'App'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import clsx from 'clsx'
import { SearchPropertyEnum } from '../../../@types/enums/SearchPropertyEnum'
import { AppDispatch } from 'redux/store'
import { setCurrentProperty } from 'redux/search/slice'

const Popup: React.FC = () => {
  const { adultCount, childrenCount, currentProperty, locationProperty } = useSelector(selectSearch)
  const dispatch = useDispatch<AppDispatch>()
  const popUpRef = React.useRef<HTMLDivElement>(null)
  const { isOpen, setIsOpen } = useContext(SearchContext)

  useOnClickOutside(popUpRef, () => setIsOpen(false))

  return (
    <div className={isOpen ? [styles.active].join(' ') : styles.root}>
      <div className={styles.popupInterface} ref={popUpRef}>
        <div className={styles.searchContainer}>
          <div
            className={clsx(styles.locationBlock, {
              [styles.locationBlock_active]: currentProperty === SearchPropertyEnum.LOCATION
            })}
            onClick={() => dispatch(setCurrentProperty(SearchPropertyEnum.LOCATION))}
          >
            <span className={styles.locationInnerBlockTitle}>Location</span>
            <span className={styles.locationInnerBlock}>
              {locationProperty ? locationProperty : 'Anywhere'}
            </span>
          </div>
          <div
            className={clsx(styles.guestsBlock, {
              [styles.guestsBlock_active]: currentProperty === SearchPropertyEnum.GUESTS
            })}
            onClick={() => dispatch(setCurrentProperty(SearchPropertyEnum.GUESTS))}
          >
            <span className={styles.guestsInnerBlockTitle}>Guests</span>
            <span className={styles.guestsInnerBlock}>
              {adultCount || childrenCount ? `${adultCount + childrenCount} people` : 'Add guests'}
            </span>
          </div>
          <div className={styles.searchBlock}>
            <div className={styles.searchInnerBlock}>
              <BiSearchAlt2 className={styles.searchIcon} />
              <span>Search</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blankSpace} />
    </div>
  )
}

export default Popup
