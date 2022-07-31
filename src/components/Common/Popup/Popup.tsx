import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiSearchAlt2 } from 'react-icons/bi'
import clsx from 'clsx'

import styles from './Popup.module.scss'

import DropdownGuestsMenu from './DropdownGuestsMenu'
import DropdownLocationMenu from './DropdownLocationMenu'

import { selectSearch } from 'redux/search/selectors'
import { AppDispatch } from 'redux/store'
import { setCurrentProperty } from 'redux/search/slice'
import { fetchBuildings } from 'redux/building/asyncActions'

import { SearchContext } from 'App'
import { getFetchParams } from 'utils/GetFetchParams'
import { useOnClickOutside } from 'hooks/useOnClickOutside'

import { SearchPropertyEnum } from '../../../@types/enums/SearchPropertyEnum'

const Popup: React.FC = () => {
  const { adultCount, childrenCount, currentProperty, locationProperty } = useSelector(selectSearch)
  const dispatch = useDispatch<AppDispatch>()
  const popUpRef = React.useRef<HTMLDivElement>(null)
  const { isOpen, setIsOpen } = React.useContext(SearchContext)

  useOnClickOutside(popUpRef, () => setIsOpen(false))

  const onClickSearch = async () => {
    setIsOpen(false)
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

  React.useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div
      className={clsx({
        [styles.active]: isOpen,
        [styles.root]: !isOpen
      })}
    >
      <div className={styles.popupInterface} ref={popUpRef}>
        <div className={styles.searchContainer}>
          <div
            className={clsx(styles.locationBlock, {
              [styles.locationBlock_active]: currentProperty === SearchPropertyEnum.LOCATION
            })}
            onClick={() => dispatch(setCurrentProperty(SearchPropertyEnum.LOCATION))}
          >
            <span className={styles.locationInnerBlockTitle}>Location</span>
            <span
              className={clsx(styles.locationInnerBlock, {
                [styles.inactive]: locationProperty === 'Add location'
              })}
            >
              {locationProperty ? locationProperty : 'Anywhere'}
            </span>
          </div>
          <DropdownLocationMenu />
          <div
            className={clsx(styles.guestsBlock, {
              [styles.guestsBlock_active]: currentProperty === SearchPropertyEnum.GUESTS
            })}
            onClick={() => dispatch(setCurrentProperty(SearchPropertyEnum.GUESTS))}
          >
            <span className={styles.guestsInnerBlockTitle}>Guests</span>
            <span
              className={clsx(styles.guestsInnerBlock, {
                [styles.inactive]: !adultCount || childrenCount
              })}
            >
              {adultCount || childrenCount ? `${adultCount + childrenCount} people` : 'Add guests'}
            </span>
          </div>
          <DropdownGuestsMenu />
          <div className={styles.searchBlock}>
            <div className={styles.searchInnerBlock} onClick={onClickSearch}>
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
