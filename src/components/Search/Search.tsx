import React, { useState } from 'react'

import styles from './Search.module.scss'

import { BiSearchAlt2 } from 'react-icons/bi'

const Search: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>()
  console.log(isOpen)

  return (
    <div className={styles.root}>
      <div className={styles.locationBlock} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.locationInnerBlock}>Anywhere</span>
      </div>
      <div className={styles.guestsBlock}>
        <span className={styles.guestsInnerBlock}>Add guests</span>
      </div>
      <div className={styles.searchBlock}>
        <BiSearchAlt2 className={styles.searchIcon} />
      </div>
    </div>
  )
}

export default Search
