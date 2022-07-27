import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiSearchAlt2 } from 'react-icons/bi'

import styles from './Popup.module.scss'

import { selectSearch } from 'redux/search/selectors'
import { SearchContext } from '../../../App'

type PopupClickType = {
  path: Node[]
}

const Popup: React.FC = () => {
  const { guestsProperty, locationProperty } = useSelector(selectSearch)
  const popUpRef = React.useRef<HTMLDivElement>(null)
  const { isOpen, setIsOpen } = useContext(SearchContext)

  React.useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        const _event = event as MouseEvent & PopupClickType

        if (popUpRef.current && !_event.path.includes(popUpRef.current)) {
          setIsOpen(false)
        }
      }
      document.body.addEventListener('click', handleClickOutside)
      return () =>
        document.body.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className={isOpen ? [styles.active].join(' ') : styles.root}>
      <div className={styles.popupInterface} ref={popUpRef}>
        <div className={styles.searchContainer}>
          <div
            className={[styles.locationBlock, styles.locationBlock_active].join(
              ' '
            )}
          >
            <span className={styles.locationInnerBlockTitle}>Location</span>
            <span className={styles.locationInnerBlock}>
              {locationProperty ? locationProperty : 'Anywhere'}
            </span>
          </div>
          <div className={[styles.guestsBlock, styles.guestActive].join(' ')}>
            <span className={styles.guestsInnerBlockTitle}>Guests</span>
            <span className={styles.guestsInnerBlock}>
              {guestsProperty
                ? `${
                    guestsProperty.adultCount + guestsProperty.childrenCount
                  } people`
                : 'Add guests'}
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
    </div>
  )
}

export default Popup
