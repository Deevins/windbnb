import React from 'react'

import { ReactComponent as Logo } from 'assets/img/logo.svg'
import styles from './Header.module.scss'
import Search from '../Search'
import { SearchContext } from 'App'
import Popup from '../Popup'

const Header: React.FC = () => {
  const { isOpen } = React.useContext(SearchContext)

  return (
    <div className={styles.root}>
      {isOpen && <Popup />}
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.search}>
        <Search />
      </div>
    </div>
  )
}

export default Header
