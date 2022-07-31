import React from 'react'
import { useSelector } from 'react-redux'

import styles from './LocationAndCountBlock.module.scss'

import LocationTitle from '../LocationTitle'

import { selectBuildings } from 'redux/building/selectors'

const LocationAndCountBlock: React.FC = () => {
  const { items } = useSelector(selectBuildings)

  return (
    <div className={styles.root}>
      <LocationTitle />
      <span>{items && items.length}+ stays</span>
    </div>
  )
}

export default LocationAndCountBlock
