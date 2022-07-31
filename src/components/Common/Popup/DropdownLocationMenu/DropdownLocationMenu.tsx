import React from 'react'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { MdLocationOn } from 'react-icons/md'

import styles from './DropdownLocationMenu.module.scss'

import { selectSearch } from 'redux/search/selectors'
import { AppDispatch } from 'redux/store'
import { setLocation } from 'redux/search/slice'

import { SearchPropertyEnum } from '../../../../@types/enums/SearchPropertyEnum'
import { placeTitles } from '../../../../@types/constants'

const DropdownLocationMenu: React.FC = () => {
  const { currentProperty } = useSelector(selectSearch)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div
      className={clsx({
        [styles.dropdownLocationMenu]: currentProperty === SearchPropertyEnum.LOCATION,
        [styles.dropdownLocationMenuHidden]: currentProperty !== SearchPropertyEnum.LOCATION
      })}
    >
      <ul>
        {placeTitles.map((el, i) => (
          <li onClick={() => dispatch(setLocation(el))} key={i}>
            <MdLocationOn className={styles.dropdownLocationMenuIcon} />
            <p>{el}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropdownLocationMenu
