import React, { useContext } from 'react'

import { ReactComponent as Logo } from 'assets/img/logo.svg'
import styles from './Header.module.scss'
import Search from '../Search'
import { SearchContext } from '../../../App'

const Header: React.FC = () => {
  //@ts-ignore
  const { isOpen, setIsOpen } = useContext(SearchContext)
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.search} onClick={() => setIsOpen(true)}>
        <Search />
      </div>
    </div>
  )
}

export default Header
