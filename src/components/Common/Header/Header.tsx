import React from 'react'

import styles from './Header.module.scss'

import { ReactComponent as Logo } from 'assets/img/logo.svg'
import Search from '../Search'
import Popup from '../Popup'

import { SearchContext } from 'App'

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
