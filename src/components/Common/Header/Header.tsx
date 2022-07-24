import React from 'react'

import { ReactComponent as Logo } from 'assets/img/logo.svg'
import styles from './Header.module.scss'
import Search from '../../Search'

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
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
