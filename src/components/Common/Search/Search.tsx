import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

import styles from './Search.module.scss'

type Props = {
  isOpen: boolean
  changeSearchBar: () => void
}

const Search: React.FC<Props> = ({ isOpen, changeSearchBar }) => {
  return (
    <div className={styles.root}>
      <div className={styles.locationBlock} onClick={changeSearchBar}>
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
